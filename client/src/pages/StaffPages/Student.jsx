import React, { useEffect } from 'react';
import axios from 'axios';

const Student = () => {
    const approved_student_api = `${process.env.REACT_APP_API_URL}/api/approvedStudents`;

     useEffect(() => {
        const approvedStudents = async() => {
            try{
                const response = await axios.get(approved_student_api);
                console.log(response);
            }catch (error) {
                console.log(error.message);
            } 
        }
        approvedStudents();
     }, [approved_student_api]);

  return (
    <div className="student-page">
        <div className="student-content">

        </div>
    </div>
  )
}

export default Student;