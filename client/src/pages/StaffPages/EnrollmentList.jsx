import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EnrollmentList = () => {
    const[enrollmentList, setEntrollmentList] = useState([]);
    cont[openEdit, setOpenEdit] = useState(false);

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

     const[formData, setFormData] = useState(
        {
           firstName: '',
           middleName: '',
           lastName: '',
           email: '',
           phoneNumber: '',
           gender: '',
           county: '',
           birthDate:'',
           grade: '',
           course: '',
           additionalCourse: '',
        }
    )
    
     const handleEdit = (id) => {

        const findEditStudent = enrollmentList.find(student => student.id === id);
        console.log('findEditStudent',findEditStudent);
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
                        ))}
                    </tbody>
                </table>
            </div>

            {openEdit && (
                <>
                    <div className="enroll-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-parts">
                                <div className="form-part1">
                                    <label htmlFor="firstName">FirstName:</label>
                                    <input type="text" 
                                    name='firstName'
                                    value={formData.firstName} 
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                    />
                                    <label htmlFor="middleName">Middle Name:</label>
                                    <input type="text" 
                                    name='middleName'
                                    value={formData.middleName}
                                    onChange={(e) => setFormData({...formData, middleName: e.target.value})}
                                     />
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text"
                                     name='lastName'
                                     value={formData.lastName}
                                     onChange={(e) => setFormData({...formData, lastName:e.target.value})}
                                      />
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="tel" 
                                    name="phoneNumber" 
                                    id="phoneNumber" 
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                                    />
                                    <label htmlFor="gender">Gender:</label>
                                    <div className="gender">
                                        <div className="male">
                                            <input type="radio" 
                                            name="gender" 
                                            id="gender"  
                                            value='Male'
                                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                            />
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div className="female">
                                            <input type="radio" 
                                            name="gender" 
                                            id="gender"  
                                            value='Female' 
                                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                            />
                                            <label htmlFor="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-part2">
                                    <label htmlFor="county">County:</label>
                                    <select name="county" 
                                    id="county" 
                                    value={formData.county}
                                    onChange={(e) => setFormData({...formData, county: e.target.value})}
                                    >
                                        {countiesList.map((county) => (
                                            <option key={county.code} value={county.name}>{county.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="birthDate">Date of Birth:</label>
                                    <input type="date"
                                     name="birthDate" 
                                     id="birthDate" 
                                     value={formData.birthDate}
                                     onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                                     />
                                    <label htmlFor="grade">KCSE Grade:</label>
                                    <select name="grade" 
                                    id="grade"
                                    value={formData.grade}
                                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
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
                                    value={formData.course}
                                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                                    >
                                        <option value='None'>None</option>
                                        {coursesDetails.map((course) => (
                                            <option key={course.id} value={course.name}>{course.name}</option>
                                        )) }
                                    </select>
                                    <label htmlFor="additionalCourses">Additional Courses:</label>
                                        <select name="additionalCourses" 
                                        id="additionalCourses"
                                        value={formData.additionalCourse}
                                        onChange={(e) => setFormData({...formData, additionalCourse: e.target.value})}
                                        >
                                            <option value='None'>None</option>
                                        {otherCourses.map((course) => (
                                            <option key={course.id} value={course.name}>{course.name}</option>
                                        )) }
                                        </select>
                                </div>
                            </div>
                            <div className="button">
                                <button type='submit'>Enroll</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default EnrollmentList