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
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = controller;