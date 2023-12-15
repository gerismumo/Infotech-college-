
const queries = {
    enrollStudents: `INSERT INTO student_table (first_name, 
        middle_name, last_name, student_email, phone_number, 
        gender, county, birth_date, grade, course, additional_course, role )
         VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
    selectStudent: 'SELECT * FROM student_table',
}

module.exports = queries;