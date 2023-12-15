import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Student = () => {
    const[studentList, setStudentList] = useState([]);

    const approved_student_api = `${process.env.REACT_APP_API_URL}/api/approvedStudents`;

     useEffect(() => {
        const approvedStudents = async() => {
            try{
                const response = await axios.get(approved_student_api);
                const success = response.data.success;
                if(success) {
                    const data = response.data.data;
                    setStudentList(data);
                }
                console.log(response);
            }catch (error) {
                console.log(error.message);
            } 
        }
        approvedStudents();
     }, [approved_student_api]);

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
                        {studentList.map((student) => (
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
                                <td><button>Edit</button></td>
                                <td><button onClick={() => handleDelete(student.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Student;