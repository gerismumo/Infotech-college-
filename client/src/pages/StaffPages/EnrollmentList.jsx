import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { coursesDetails, otherCourses } from '../components/Courses';

const EnrollmentList = () => {
    const[enrollmentList, setEntrollmentList] = useState([]);
    const[openEdit, setOpenEdit] = useState(false);
    const[editId, setEditId] = useState(null);

    const enroll_student_api = `${process.env.REACT_APP_API_URL}/api/enrolledStudents`;

    useEffect(() => {
        const enrollStudents = async() => {
            try {
                const response = await axios.get(enroll_student_api);
                const success = response.data.success;
                if(success) {
                    const data = response.data.data;
                    setEntrollmentList(data);
                }
            } catch(error) {
                console.log(error.message);
            }
        }
        enrollStudents();
    }, [enroll_student_api]);

    const handleApprove = async (id) => {
        console.log(`Approve ${id}`);
        const approve_api = `${process.env.REACT_APP_API_URL}/api/updateApprove/${id}`;

        try {
            const response = await axios.put(approve_api);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDelete = async (id) => {
        console.log(id);
        const delete_api = `${process.env.REACT_APP_API_URL}/api/deleteStudent/${id}`;

        try {
            const response = await axios.delete(delete_api);
            console.log(response);
        } catch(error) {
            console.log(error.message);
        }
     }

     

    const[formData, setFormData] = useState('');

    const [countiesList, setCountiesList] = useState([]);
    const counties_api = `${process.env.REACT_APP_API_URL}/api/counties`;

    useEffect(() => {
        const fetchCounties = async() => {
            try {
                const response = await axios.get(counties_api);
                const success = response.data.success;
                if(success) {
                    setCountiesList(response.data.data);
                }
            }catch(error) {
                console.log(error.message);
            }
        }
        fetchCounties();
    },[counties_api]);

    const [editForm, setEditForm] = useState(null);
     const handleEdit = (id) => {
        setEditId(id);
        const editUser = enrollmentList.find(student => student.id === id);
        setEditForm(editUser);
        setOpenEdit(true);
     }
     console.log('editForm',editForm);
     const handleSubmitEdit = () => {
        
     }
      
  return (
    <div className="enrollment-page">
        <div className="enroll-content">
            <div className="enroll-table">
                <table>
                    <thead>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Gender</th>
                        <th>County</th>
                        <th>Birth Date</th>
                        <th>Grade</th>
                        <th>Course</th>
                        <th>Additional Course</th>
                        <th>Approved</th>
                    </thead>
                    <tbody>
                        {enrollmentList.length === 0 ? (
                            <tr colspan='13'>
                                <td>No Data</td>
                            </tr>
                        ): enrollmentList.map((student) => (
                            <React.Fragment key={student.id}>
                                <tr key={student.id}>
                                    <td>{student.first_name}</td>
                                    <td>{student.middle_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.student_email}</td>
                                    <td>{student.phone_number}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.county}</td>
                                    <td>{student.birth_date}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.course}</td>
                                    <td>{student.additional_course}</td>
                                    <td>{student.approved === 0 ? 'No' : 'Yes'}</td>
                                    <td><button onClick={() =>handleApprove(student.id)}>Approve</button></td>
                                    <td><button onClick={() => handleEdit(student.id)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(student.id)}>Delete</button></td>
                                </tr>
                                {openEdit && editId === student.id && (
                                    <tr>
                                        <td colSpan='15'>
                                        <>
                                        <div className="edit-form">
                                        <div className="enroll-form">
                                                <div className="close-button">
                                                    <button onClick={() => setOpenEdit(false)}>Close</button>
                                                </div>
                                                <form onSubmit={handleSubmitEdit}>
                                                    <div className="form-parts">
                                                        <div className="form-part1">
                                                            <label htmlFor="firstName">FirstName:</label>
                                                            <input type="text" 
                                                            name='firstName'
                                                            value={editForm.first_name} 
                                                            onChange={(e) => setEditForm({...editForm, first_name: e.target.value})}
                                                            />
                                                            <label htmlFor="middleName">Middle Name:</label>
                                                            <input type="text" 
                                                            name='middleName'
                                                            value={editForm.middle_name}
                                                            onChange={(e) => setEditForm({...editForm, middle_name: e.target.value})}
                                                            />
                                                            <label htmlFor="lastName">Last Name:</label>
                                                            <input type="text"
                                                            name='lastName'
                                                            value={editForm.last_name}
                                                            onChange={(e) => setEditForm({...editForm, last_name:e.target.value})}
                                                            />
                                                            <label htmlFor="email">Email:</label>
                                                            <input type="email" 
                                                            name="email" 
                                                            id="email" 
                                                            value={editForm.student_email}
                                                            onChange={(e) => setEditForm({...editForm, student_email: e.target.value})}
                                                            />
                                                            <label htmlFor="phoneNumber">Phone Number:</label>
                                                            <input type="tel" 
                                                            name="phoneNumber" 
                                                            id="phoneNumber" 
                                                            value={editForm.phone_number}
                                                            onChange={(e) => setEditForm({...editForm, phone_number: e.target.value})}
                                                            />
                                                            <label htmlFor="gender">Gender:</label>
                                                            <div className="gender">
                                                                <div className="male">
                                                                    <input type="radio" 
                                                                    name="gender" 
                                                                    id="gender"  
                                                                    value='Male'
                                                                    checked={editForm.gender === 'Male'}
                                                                    onChange={(e) => setEditForm({...editForm, gender: e.target.value})}
                                                                    />
                                                                    <label htmlFor="male">Male</label>
                                                                </div>
                                                                <div className="female">
                                                                    <input type="radio" 
                                                                    name="gender" 
                                                                    id="gender"  
                                                                    value='Female' 
                                                                    checked={editForm.gender === 'Female'}
                                                                    onChange={(e) => setEditForm({...editForm, gender: e.target.value})}
                                                                    />
                                                                    <label htmlFor="female">Female</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-part2">
                                                            <label htmlFor="county">County:</label>
                                                            <select name="county" 
                                                            id="county" 
                                                            value={editForm.county}
                                                            onChange={(e) => setEditForm({...editForm, county: e.target.value})}
                                                            >
                                                                {countiesList.map((county) => (
                                                                    <option key={county.code} value={county.name}>{county.name}</option>
                                                                ))}
                                                            </select>
                                                            <label htmlFor="birthDate">Date of Birth:</label>
                                                            <input type="date"
                                                            name="birthDate" 
                                                            id="birthDate" 
                                                            value={editForm.birth_date}
                                                            onChange={(e) => setEditForm({...editForm, birth_date: e.target.value})}
                                                            />
                                                            <label htmlFor="grade">KCSE Grade:</label>
                                                            <select name="grade" 
                                                            id="grade"
                                                            value={editForm.grade}
                                                            onChange={(e) => setEditForm({...editForm, grade: e.target.value})}
                                                            >
                                                                <option value="A">A</option>
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
                                                            <label htmlFor="course">Course:</label>
                                                            <select name="course" 
                                                            id="course"
                                                            value={editForm.course}
                                                            onChange={(e) => setEditForm({...editForm, course: e.target.value})}
                                                            >
                                                                <option value='None'>None</option>
                                                                {coursesDetails.map((course) => (
                                                                    <option key={course.id} value={course.name}>{course.name}</option>
                                                                )) }
                                                            </select>
                                                            <label htmlFor="additionalCourses">Additional Courses:</label>
                                                                <select name="additionalCourses" 
                                                                id="additionalCourses"
                                                                value={editForm.additional_course}
                                                                onChange={(e) => setEditForm({...editForm, additional_course: e.target.value})}
                                                                >
                                                                    <option value='None'>None</option>
                                                                {otherCourses.map((course) => (
                                                                    <option key={course.id} value={course.name}>{course.name}</option>
                                                                )) }
                                                                </select>
                                                        </div>
                                                    </div>
                                                    <div className="button">
                                                        <button type='submit'>Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                            
                                        </>
                                        </td>
                                    </tr>
                                    
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            
        </div>
    </div>
  )
}

export default EnrollmentList