import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EnrollmentList = () => {
    const[enrollmentList, setEntrollmentList] = useState([]);

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
                        {enrollmentList.map((student) => (
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
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default EnrollmentList