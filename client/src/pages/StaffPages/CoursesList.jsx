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
    }

    const[otherCourses, setOtherCourses] = useState([]);

    const other_courses_api = `${process.env.REACT_APP_API_URL}/api/otherCoursesList`;

    useEffect(() => {
        const coursesList = async() => {
            try {
                const response = await axios.get(other_courses_api);
                const success = response.data.success;
                if(success) {
                    const courseData = response.data.data;
                    setOtherCourses(courseData);
                }
                
            }catch (error) {
                toast.error(error.message);
            }
        }
        coursesList();
    }, [other_courses_api]);

    // console.log('coursesList', otherCourses);

    const[openOtherCourseForm, setOpenOtherCourseForm] = useState(false);
    const handleAddOtherCourse = () => {
        setOpenOtherCourseForm(true);
    }
    const[otherCourseForm, setOtherCourseForm] = useState({
        course: '',
        fees:'',
    });

    const handleSubmitOtherCourse = async(e) => {
        e.preventDefault();

        for(const key in otherCourseForm){
            if(otherCourseForm[key] === '') {
                toast.error('Please fill all fields');
                return;
            }
        }

        const post_other_course = `${process.env.REACT_APP_API_URL}/api/addOtherCourse`;
        try{
            const response = await axios.post(post_other_course, otherCourseForm);
            console.log(response);
        }catch(error) {
            toast.error(error.message);
        }
        
    }

    const[otherCoursesEditForm , setOtherCoursesEditForm] = useState(false);
    const[editOtherId, setEditOtherId] = useState(null);
    const[editOtherForm, setEditOtherForm] = useState(null);

    const handleEditOtherCourse = (id) => {
        console.log(id);
        setEditOtherId(id);

        const editOtherCourse = otherCourses.find(course => course.id === id);
        setEditOtherForm(editOtherCourse);
        setOtherCoursesEditForm(true);
    }
    // console.log(editOtherForm);

    const handleSubmitOtherCourseEdit = async(e) => {
        e.preventDefault();
        for(const key in editOtherForm) {
            if(editOtherForm[key] === '') {
                toast.error('Please fill all fields');
                return;
            }
            const edit_other_api = `${process.env.REACT_APP_API_URL}/api/updateOtherCourse/${editOtherId}`;

            try {
                const response = await axios.put(edit_other_api, editOtherForm);
                console.log(response);
            }catch(error) {
                toast.error(error.message);
            }
        }
    }

    const handleDeleteOtherCourse = async(id) => {
       
        const delete_other_course_api = `${process.env.REACT_APP_API_URL}/api/deleteOtherCourse/${id}`;

        try {
            const response = await axios.delete(delete_other_course_api);
            console.log(response);
        }catch(error) {
            toast.error(error.message);
        }
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
            <div className="other-course-title">
                <h2>Other Courses</h2>
            </div>
            <div className="other-courses-table">
                <table>
                    <thead>
                        <th>Course</th>
                        <th>Fees</th>
                        <th><button onClick={handleAddOtherCourse}>Add Course</button></th>
                    </thead>
                    <tbody>
                            {otherCourses.length === 0 ? (
                                <tr>
                                    <td colSpan='2'>No Data</td>
                                </tr>
                            ): otherCourses.map((course) => (
                            <React.Fragment key={course.id}>
                                <tr key={course.id}>
                                    <td>{course.course}</td>
                                    <td>{course.fees}</td>
                                    <td><button onClick={()=>handleEditOtherCourse(course.id)}>Edit</button></td>
                                    <td><button onClick={() => handleDeleteOtherCourse(course.id)}>Delete</button></td>
                                </tr>
                                {otherCoursesEditForm && course.id === editOtherId && (
                                    <div className="edit-course-form">
                                        <div className="edit-course">
                                            <div className="button">
                                                <button onClick={() => setOtherCoursesEditForm(false)}>Close</button>
                                            </div>
                                            <div className="form">
                                                <form onSubmit={(e) =>handleSubmitOtherCourseEdit(e)}>
                                                    <label htmlFor="course">Course:</label>
                                                    <input type="text"
                                                    name='course'
                                                    value={editOtherForm.course}
                                                    onChange={(e) => setEditOtherForm({...editOtherForm, course: e.target.value})}
                                                     />
                                                    <label htmlFor="fees">Fees:</label>
                                                    <input 
                                                    type="number" 
                                                    name="fees" 
                                                    id="fees" 
                                                    value={editOtherForm.fees}
                                                    onChange={(e) => setEditOtherForm({...editOtherForm, fees: e.target.value})}
                                                    />
                                                    <div className="button">
                                                        <button type='submit'>Edit</button>
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
        {openOtherCourseForm && (
            <div className="modal-add-course">
                <div className="add-course-form">
                    <div className="button">
                        <button onClick={() => setOpenOtherCourseForm(false)}>Close</button>
                    </div>
                    <div className="form">
                        <form onSubmit={(e) => handleSubmitOtherCourse(e)}>
                            <label htmlFor="course">Course:</label>
                            <input type="text" 
                            name='course'
                            value={otherCourseForm.course}
                            onChange={(e) => setOtherCourseForm({...otherCourseForm, course: e.target.value})}
                            />
                            <label htmlFor="fees">Fees:</label>
                            <input 
                            type="number" 
                            name="fees" 
                            id="fees" 
                            min='0'
                            value={otherCourseForm.fees}
                            onChange={(e) => setOtherCourseForm({...otherCourseForm, fees:e.target.value})}
                            />
                            <div className ='button'>
                                <button type='submit'>Add Course</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
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