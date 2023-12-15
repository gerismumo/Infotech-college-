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
    }
}

module.exports = controller;