import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const CoursesList = () => {
    const[courseList, setCourseList] = useState([]);

    const [addCourseForm, setAddCourseForm] = useState(false);
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
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