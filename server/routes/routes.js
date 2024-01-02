const express = require('express');
const routes = express.Router();
const counties  = require('../data/counties');

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

routes.post('/messageUs', (req, res) => {
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
                subject: 'Contact Board',
                html: formData.text,
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
                                                    <h1>Thank You for Your Contacting Us!</h1>
                                                    <p>We appreciate your interest in our program. Your Message has been received successfully.</p>
                                                    <p>Best regards,<br>Infotech institute of professional studies </p>
                                                </div>
                                            </body>
                                            </html>
                                        `;
                    const thankYouData = {
                        from: process.env.EMAIL_USERNAME,
                        to: email,
                        subject: 'Contact Board',
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
        // console.log(formData);
    }catch (error) {
        res.json({success: false, message: error.message});
    }
});

module.exports = routes;
