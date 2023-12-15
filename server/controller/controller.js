const database = require('../database/db');
const queries = require('../models/queries');


const controller = {
    enrollStudents: async (formData) => {
        try {
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
            const additionCourse = formData.additionCourse;

            const connection = await database.createConnection();
            console.log(connection);
            const sql =  queries.enrollStudents;
            console.log(formData);
            const enroll = await new Promise((resolve, reject) => {
                    connection.query(sql,[firstName, middleName, lastName, email, phoneNumber,gender , county, birthDate, grade, course, additionCourse], (err, result) => {
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
    }
}

module.exports = controller;