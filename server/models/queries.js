
const queries = {
    enrollStudents: `INSERT INTO students_table (first_name, 
        middle_name, last_name, student_email, phone_number, 
        gender, county, birth_date, grade, course, additional_course)
         VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
    selectStudent: 'SELECT * FROM students_table',
    selectStudentEmail: 'SELECT * FROM students_table WHERE student_email = ?',
    selectStaff: 'SELECT * FROM staff_table',
    selectStaffByEmail:'SELECT * FROM staff_table WHERE email = ?',
}

module.exports = queries;