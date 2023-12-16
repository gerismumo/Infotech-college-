const createConnection= require('../database/db');
const queries = require('../models/queries');


const controller = {
    enrollStudents: async (formData) => {
        try {
            const connection = await createConnection();
            const firstName = formData.firstName;
            const middleName = formData.middleName;
            const lastName = formData.lastName;
            const email = formData.email;
            const phoneNumber = formData.phoneNumber;
            const gender = formData.gender;
            const county = formData.county;
            const birthDate = formData.birthDate;
            const grade = formData.grade;
            const course = formData.course;
            const additionalCourse = formData.additionalCourse;

            
            const sql =  queries.enrollStudents;
           
            const enroll = await new Promise((resolve, reject) => {
                    connection.query(sql,[firstName, middleName, lastName, email, phoneNumber,gender , county, birthDate, grade, course, additionalCourse], (err, result) => {
                        if(err) {
                            reject(err);
                        }else {
                            resolve(result);
                        }
                    });
            });
            connection.end();
            return enroll;
        } catch(error) {
            console.error(error.message);
        }
    },
    selectStudents: async () => {
        try {
            const connection = await createConnection();
            const sql = queries.selectStudent;

            return new Promise((resolve, reject) => {
                connection.query(sql, (err, result) => {
                    if(err) {
                        console.log(err);
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                });
                connection.end();
            });

        }catch (error)  {
            console.error(error.message);
        }
    },
    selectStudentByEmail: async (email) => {
        try {
            const connection = await createConnection();
            const sql = queries.selectStudentEmail;

            return new Promise((resolve, reject) => {
                connection.query(sql,[email], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    selectStaffByEmail: async (email) => {
        try {
            const connection = await createConnection();
            const sql = queries.selectStaffByEmail;

            return new Promise((resolve, reject) => {
                connection.query(sql,[email], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    selectApprovedStudent: async () => {
        try {
            const connection = await createConnection();
            const sql = queries.selectApprovedStudents;

            return new Promise((resolve, reject) => {
                connection.query(sql, (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    selectUnApprovedStudent: async () => {
        try {
            const connection = await createConnection();
            const sql = queries.selectUnApprovedStudents;

            return new Promise((resolve, reject) => {
                connection.query(sql, (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    ApproveStudents: async (id) => {
        try {
            const connection = await createConnection();
            const sql = queries.updateApproveStudent;

            return new Promise((resolve, reject) => {
                connection.query(sql, [id], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            })
        } catch (error) {
            console.log(error.message);
        }
    },
    deleteStudent: async (id) => {
        try{
            const connection = await createConnection();
            const sql = queries.deleteStudent;
            return new Promise((resolve, reject) => {
                connection.query(sql, id, (err, result) => {
                    if(err) {
                        console.log(err);
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch(error) {
            console.log(error.message);
        }
    },
    updateStudent: async (id, editForm) => {
        try {
            const connection = await createConnection();
            const sql = queries.updateStudent;
            const firstName = editForm.first_name;
            const middleName = editForm.middle_name;
            const lastName = editForm.last_name;
            const email =  editForm.student_email;
            const phoneNumber = editForm.student_phone;
            const gender = editForm.gender;
            const county = editForm.county;
            const birthDate = editForm.birth_date;
            const grade = editForm.grade;
            const course = editForm.course;
            const additionalCourse = editForm.additional_course;

            return new Promise((resolve, reject) => {

                connection.query(sql,[firstName, middleName, lastName, email, phoneNumber, gender, county, birthDate, grade, course, additionalCourse, id], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch(error) {
            console.log(error.message);
        }
    },
    addCourses: async(formData) => {
        try{
            const connection = await createConnection();
            const sql = queries.addCourses;

            const courseName = formData.courseName;
            const examiner = formData.examiner;
            const duration = formData.duration;
            const grade = formData.grade;
            const fees = formData.fees;

            return new Promise((resolve, reject) => {
                connection.query(sql,[courseName, examiner, duration, grade, fees], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch(error) {
            console.log(error.message);
        }
    },
    selectCourses: async () => {
        try {
            const connection = await createConnection();
            const sql = queries.selectCourses;

            return new Promise((resolve, reject) => {
                connection.query(sql, (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch(error) {
            console.log(error.message);
        }
    },
    updateCourse: async (id, editForm) => {
        try{
            const connection = await createConnection();
            const sql = queries.updateCourse;

            const courseName = editForm.course_name;
            const examiner = editForm.examiner;
            const duration = editForm.duration;
            const grade = editForm.grade;
            const fees = editForm.fees;

            return new Promise((resolve, reject) => {
                connection.query(sql,[courseName, examiner, duration, grade, fees,id], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                 connection.end();
            });

        } catch(error) {
            console.log(error);
        }
    },
    deleteCourse: async (id) => {
        try {
            const connection = await createConnection();
            const sql = queries.deleteCourse;

            return new Promise((resolve, reject) => {
                connection.query(sql, [id], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch (error) {
            console.log(error);
        }
    },
    otherCourses: async () => {
        try{
            const connection = await createConnection();
            const sql = queries.selectOtherCourses;

            return new Promise((resolve, reject) => {
                connection.query(sql, (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                connection.end();
            });
        }catch(error) {
            console.log(error);
        }
    },
    insertOtherCourses: async(course, fees) => {
        try{
            const connection = await createConnection();
            const sql = queries.insertOtherCourses;

            return new Promise((resolve, reject) => {
                connection.query(sql,[course, fees], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                });
                connection.end();
            });
        }catch(error) {
            console.log(error);
        }
    },
    updateOtherCourse: async (id, course, fees) => {
        try{
            const connection = await createConnection();
            const sql = queries.updateOtherCourses;

            return new Promise((resolve, reject) => {
                connection.query(sql,[course, fees, id], (err, result) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(result);
                    }
                });
                 connection.end();
            });

        } catch(error) {
            console.log(error);
        }
    },
    deleteOtherCourse: async (id) => {
        try {
            const connection = await createConnection();
            const sql = queries.deleteOtherCourses;

            return new Promise((resolve, reject) => {
                connection.query(sql, [id], (err, result) => {
                    if(err) {
                        console.log(err);
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                });
                connection.end();
            });
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = controller;