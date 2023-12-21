const express = require('express');
const routes = express.Router();
const counties  = require('../data/counties');
const controller = require('../controller/controller');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({path: '../database/.env'});

routes.get('/counties', (req, res) => {
    try {
        res.json({success: true, data: counties});
    }catch (error) {
        res.json({success: false, error: error.message});
    }
});

routes.post('/enroll', async(req, res) => {
    try {
        const formData = req.body;
        const email = formData.email;
        const formDataArr = Array(formData);
        console.log(formDataArr.length);
        if(formDataArr.length > 0) {
            let config = {
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: process.env.EMAIL_SECURE,
                auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
                }
            }
            let transporter = nodemailer.createTransport(config);
            const data = {
                from: email,
                to: process.env.EMAIL_USERNAME,
                subject: 'Enrollment',
                html: `
                <p><strong>First Name:</strong> ${formData.firstName}</p>
                <p><strong>Middle Name:</strong> ${formData.middleName}</p>
                <p><strong>Last Name:</strong> ${formData.lastName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
                <p><strong>Gender:</strong> ${formData.gender}</p>
                <p><strong>County:</strong> ${formData.county}</p>
                <p><strong>Birth Date:</strong> ${formData.birthDate}</p>
                <p><strong>Grade:</strong> ${formData.grade}</p>
                <p><strong>Course:</strong> ${formData.course}</p>
                <p><strong>Additional Courses:</strong> ${formData.additionalCourse}</p>
              `,
            }
            transporter.sendMail(data)
            .then(() => {
                const response = ({success: true, message:'Submitted Successfully'});

                    const thankYouMessage = `
                                            <html>
                                            <head>
                                                <style>
                                                    body {
                                                        font-family: 'Arial', sans-serif;
                                                        text-align: center;
                                                        background-color: #f4f4f4;
                                                    }
                                                    .container {
                                                        max-width: 600px;
                                                        margin: 20px auto;
                                                        padding: 20px;
                                                        background-color: #ffffff;
                                                        border-radius: 8px;
                                                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                                    }
                                                    h1 {
                                                        color: #007bff;
                                                    }
                                                    p {
                                                        color: #333;
                                                    }
                                                </style>
                                            </head>
                                            <body>
                                                <div class="container">
                                                    <h1>Thank You for Your Enrollment!</h1>
                                                    <p>We appreciate your interest in our program. Your information has been received successfully.</p>
                                                    <p>If you have any further questions or need assistance, feel free to contact us.</p>
                                                    <p>Best regards,<br>Infotech institute of professional studies </p>
                                                </div>
                                            </body>
                                            </html>
                                        `;
                    const thankYouData = {
                        from: process.env.EMAIL_USERNAME,
                        to: email,
                        subject: 'Enrollment',
                        html: thankYouMessage,
                    }
                    transporter.sendMail(thankYouData)
                    .then(() => {
                        res.json(response);
                      })
                      .catch(error => {
                        res.json({success: false, message: 'Error submitting information'});
                      });
              })
              .catch(error => {
                res.json({success: false, message: 'Error submitting information'});
              });
        }else {
            res.json({success: false, message: "Please fill the enrollment form"})
        }
    } catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.post('/login', async(req, res) => {
    try{
        const formData = req.body;
        const email = formData.email;
        const userPassword = formData.password;
        const findStudentByEmail = await controller.selectStudentByEmail(email);
        const findStaffByEmail = await controller.selectStaffByEmail(email);

        if(findStudentByEmail.length > 0) {
            console.log('Email found Please')
            const password = findStudentByEmail[0].first_name;
            if(userPassword === password) {
                console.log('Student Login successiful');
                res.json({success: true, message: 'Login Successiful', data: findStudentByEmail});
            } else  {
                console.log(' Student Please Check the password and the email')
                res.json({success:false, message: 'Please Check the password and the email'});
            }
        } else if(findStaffByEmail.length > 0) {
            console.log('Email found Please')
            const password = findStaffByEmail[0].password;
            if(userPassword === password) {
                res.json({success: true, message: 'Login Successful', data: findStaffByEmail})
            } else  {
                res.json({success: false, message: 'Please check the password and the email'});
            }
        }else {
            res.json({success: false, message: 'Email not found Please Enroll'});
        }
    } catch (error) {
        res.json({success: false, message: error.message});
    }
});

routes.get('/approvedStudents', async(req, res) => {
    try {
        const data = await controller.selectApprovedStudent();
        res.json({success: true, data: data});
    }catch (error) {
        res.json({success: false, message: error.message});
    }
});

routes.get('/enrolledStudents', async(req, res) => {
    try {
        const data = await controller.selectUnApprovedStudent();
        res.json({success: true, data: data});
    }catch (error) {
        res.json({success: false, message: error.message});
    }
});

routes.put('/updateApprove/:id', async(req, res) => {
    try {
        const {id} =  req.params;
        await controller.ApproveStudents(id);
        res.json({success: true, message: 'Successful approval' });
    } catch (error) {
        res.json({success: false, message: error.message});
    }
});

routes.delete('/deleteStudent/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await controller.deleteStudent(id);
        
        res.json({success: true, message: 'Student deleted successfully'});

    } catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.put('/updateUser/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const editForm = req.body;
        
        // console.log(id);
        // console.log(editForm);
        await controller.updateStudent(id, editForm);
        res.json({success: true, message: 'Student updated successfully'});
    }catch (error) {
        req.json({success: false, message: error.message});
    }
});

routes.post('/addCourses', async (req, res) => {
    try {
        const formData = req.body;
        
        await controller.addCourses(formData);
        res.json({success: true, message: 'Successful added courses'})
    }catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.get('/coursesList', async (req, res) => {
    try {
        const data = await controller.selectCourses();
        res.json({success: true, data: data}); 
    }catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.put('/updateCourse/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const editForm = req.body;
        await controller.updateCourse(id, editForm);
        res.json({success: true, message:'Course updated successfully'});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
});

routes.delete('/deleteCourse/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await controller.deleteCourse(id);
        res.json({success: true, message: 'Course deleted successfully'})
    }catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.get('/otherCoursesList', async (req, res) => {
    try {
        const data = await controller.otherCourses();
        res.json({success: true, data: data}); 
    }catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.post('/addOtherCourse', async (req, res) => {
    try {
        const otherCourse = req.body;
        const course = otherCourse.course;
        const fees = otherCourse.fees;
        await controller.insertOtherCourses(course, fees);

        res.json({success: true, message: 'Course added successfully'})
    }catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.put('/updateOtherCourse/:id', async(req, res) => {
    try {
        const {id} = req.params;

        const otherCourse = req.body;
        const course = otherCourse.course;
        const fees = otherCourse.fees;

        await controller.updateOtherCourse(id, course, fees);
        res.json({success: true, message: 'Course updated successfully'})
    } catch(error) {
        res.json({success: false, message: error.message});
    }
});

routes.delete('/deleteOtherCourse/:id', async(req, res) => {
    try{
        const {id} = req.params;
        console.log(id);
        await controller.deleteOtherCourse(id);
        res.json({success: true, message: 'Course deleted successfully'});

    }catch (err) {
        res.json({success: false, message: err.message});
    }
})

module.exports = routes;