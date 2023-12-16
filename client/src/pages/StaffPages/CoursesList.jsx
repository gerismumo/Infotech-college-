import React, { useState } from 'react';

const CoursesList = () => {
    const[courseList, setCourseList] = useState([]);

    const [addCourseForm, setAddCourseForm] = useState(false);
    const handleAddCourse = () => {
        setAddCourseForm(true);
    }

  return (
    <div className="courses-list">
        <div className="courses-content">
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
                        <form action="">
                            <label htmlFor="courseName">Course:</label>
                            <input type="text" 
                            name='courseName'
                            />
                            <label htmlFor="examiner">Examiner:</label>
                            <input type="text" 
                            name='examiner'
                            />
                            <label htmlFor="duration">Duration:</label>
                            <input type="text" 
                            name='duration'
                            />
                            <label htmlFor="grade">Entry Grade:</label>
                            <select name="grade" id="grade">
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