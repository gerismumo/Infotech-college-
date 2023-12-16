import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const CoursesList = () => {
    const[courseList, setCourseList] = useState([]);

    const [addCourseForm, setAddCourseForm] = useState(false);
    const[openEditForm, setOpenEditForm] = useState(false);

    const courses_api = `${process.env.REACT_APP_API_URL}/api/coursesList`;

    useEffect(() => {
        const coursesList = async() => {
            try {
                const response = await axios.get(courses_api);
                const success = response.data.success;
                if(success) {
                    const courseData = response.data.data;
                    setCourseList(courseData);
                }
                
            }catch (error) {
                toast.error(error.message);
            }
        }
        coursesList();
    }, [courses_api]);
    
    const handleAddCourse = () => {
        setAddCourseForm(true);
    }

    const[formData, setFormData] = useState({
        courseName: '',
        examiner: '',
        duration: '',
        grade: '',
        fees: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        for(const key in formData) {
            if(formData[key]=== '') {
                toast.error('Please fill all fields');
                return;
            }
        }

        const courses_api = `${process.env.REACT_APP_API_URL}/api/addCourses`;

        try{
            const response = await axios.post(courses_api, formData);
            const success = response.data.success;
            if(success) {
                toast.success(response.data.message);
            }else {
                toast.error(response.data.message);
            }
        }catch(error) {
            toast.error(error.message);
        }  
    }

    const handleDelete = async(id) => {
        console.log(id);
        const delete_course = `${process.env.REACT_APP_API_URL}/api/deleteCourse/${id}`;

        try {
            const response = await axios.delete(delete_course);
            console.log(response);

        }catch(error) {
            toast.error(error.message);
        }
    }

    const[editId, setEditId] = useState(null);
    const[editForm, setEditForm] = useState(null);

    const handleEdit = (id) => {
        console.log(id);
        setEditId(id);
        const editCourse = courseList.find(course => course.id === id);
        setEditForm(editCourse);
        setOpenEditForm(true);
    }

    const handleSubmitEdit = async(e) => {
        e.preventDefault();

        for(const key in editForm) {
            if(editForm[key] === '') {
                toast.error('Please fill all fields');
                return;
            }
        }
        const edit_courses_api = `${process.env.REACT_APP_API_URL}/api/updateCourse/${editId}`;

        try {
            const response = await axios.put(edit_courses_api, editForm);
            console.log(response);
        } catch (error) {
            toast.error(error.message);
        }
        console.log(editForm);
    }

  return (
    <div className="courses-list">
        <div className="courses-content">
            <ToastContainer />
            <div className="course-list-table">
                <table>
                    <thead>
                        <th>COURSE NAME</th>
                        <th>EXAMINER</th>
                        <th>DURATION</th>
                        <th>MIN ENTRY</th>
                        <th>FEES</th>
                        <th><button onClick={handleAddCourse}>Add Course</button></th>
                    </thead>
                    <tbody>
                        {courseList.length === 0 ? (
                            <tr>
                                <td>No Courses Available</td>
                            </tr>
                        ) : courseList.map((course) => (
                            <React.Fragment key={course.id}>
                                <tr key={course.id}>
                                    <td>{course.course_name}</td>
                                    <td>{course.examiner}</td>
                                    <td>{course.duration}</td>
                                    <td>{course.grade}</td>
                                    <td>{course.fees}</td>
                                    <td><button onClick={() =>handleEdit(course.id)}>Edit</button></td>
                                    <td><button onClick={() =>handleDelete(course.id)}>Delete</button></td>
                                </tr>
                                {openEditForm && course.id === editId && (
                                    <div className="edit-course-form">
                                        <div className="edit-form">
                                            <div className="button-close">
                                                <button onClick={() => setOpenEditForm(false)}>Close</button>
                                            </div>
                                            <div className="form">
                                                <form onSubmit={(e) => handleSubmitEdit(e)}>
                                                    <label htmlFor="courseName">Course:</label>
                                                    <input type="text" 
                                                    name='course_name' 
                                                    value={editForm.course_name}
                                                    onChange={(e) => setEditForm({...editForm, course_name: e.target.value})}
                                                    />
                                                    <label htmlFor="examiner">Examiner:</label>
                                                    <input type="text" 
                                                    name='examiner'
                                                    value={editForm.examiner}
                                                    onChange={(e) => setEditForm({...editForm, examiner:e.target.value})}
                                                    />
                                                    <label htmlFor="grade">Grade</label>
                                                    <select name="grade" 
                                                    id="grade"
                                                    value={editForm.grade}
                                                    onChange={(e) => setEditForm({...editForm, grade: e.target.value})}
                                                    >
                                                        <option value="A">A</option>
                                                        <option value="A-">A-</option>
                                                        <option value="B+">B+</option>
                                                        <option value="B">B</option>
                                                        <option value="B-">B-</option>
                                                        <option value="C+">C+</option>
                                                        <option value="C">C</option>
                                                        <option value="C-">C-</option>
                                                        <option value="D+">D+</option>
                                                        <option value="D">D</option>
                                                        <option value="D-">D-</option>
                                                        <option value="E">E</option>
                                                    </select>
                                                    <label htmlFor="fees">Fees:</label>
                                                    <input type="text" 
                                                    name='fees'
                                                    value={editForm.fees}
                                                    onChange={(e) => setEditForm({...editForm, fees:e.target.value})}
                                                    />
                                                    <div className="button">
                                                        <button type='Submit'>Edit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )}
                            </React.Fragment>
                            
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>

        {addCourseForm && (
            <div className="modal-add-course">
                <div className="add-course-form">
                    <div className="button">
                        <button onClick={() => setAddCourseForm(false)}>Close</button>
                    </div>
                    <div className="form">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <label htmlFor="courseName">Course:</label>
                            <input type="text" 
                            name='courseName'
                            value={formData.courseName}
                            onChange={(e) => setFormData({...formData, courseName: e.target.value})}
                            />
                            <label htmlFor="examiner">Examiner:</label>
                            <input type="text" 
                            name='examiner'
                            value={formData.examiner}
                            onChange={(e) => setFormData({...formData, examiner: e.target.value})}
                            />
                            <label htmlFor="duration">Duration:</label>
                            <input type="text" 
                            name='duration'
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                            />
                            <label htmlFor="grade">Entry Grade:</label>
                            <select name="grade" 
                            id="grade"
                            value={formData.grade}
                            onChange={(e) => setFormData({...formData, grade: e.target.value})}
                            >
                                <option value="A">A</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="B-">B-</option>
                                <option value="C+">C+</option>
                                <option value="C">C</option>
                                <option value="C-">C-</option>
                                <option value="D+">D+</option>
                                <option value="D">D</option>
                                <option value="D-">D-</option>
                                <option value="E">E</option>
                            </select>
                            <label htmlFor="fees">Fees:</label>
                            <input type="number" 
                            name="fees" 
                            id="fees" 
                            min={0}
                            value={formData.fees}
                            onChange={(e) => setFormData({...formData, fees: e.target.value})}
                            />
                            <div className="button">
                                <button type='submit'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default CoursesList