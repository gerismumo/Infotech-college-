
const queries = {
    enrollStudents: `INSERT INTO students_table (first_name, 
        middle_name, last_name, student_email, phone_number, 
        gender, county, birth_date, grade, course, additional_course)
         VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
    selectStudent: 'SELECT * FROM students_table',
    selectStudentEmail: 'SELECT * FROM students_table WHERE student_email = ?',
    selectStaff: 'SELECT * FROM staff_table',
    selectStaffByEmail:'SELECT * FROM staff_table WHERE email = ?',
    selectApprovedStudents: 'SELECT * FROM students_table WHERE approved = 1',
    selectUnApprovedStudents: 'SELECT * FROM students_table WHERE approved = 0',
    updateApproveStudent: 'UPDATE students_table SET approved = true WHERE id = ?',
    deleteStudent: 'DELETE FROM students_table WHERE id = ?',
    updateStudent: `UPDATE students_table SET first_name = ?, middle_name = ?, last_name = ?,
                    student_email = ?, phone_number = ?, gender = ?, county = ?,
                    birth_date = ?, grade = ?, course = ?, additional_course = ? WHERE id = ?`,
    addCourses:'INSERT INTO courses_table (course_name, examiner, duration, grade, fees) VALUES (?, ?, ?, ?, ?)',
}

module.exports = queries;