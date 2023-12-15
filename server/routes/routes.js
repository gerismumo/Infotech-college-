const express = require('express');
const routes = express.Router();
const counties  = require('../data/counties');
const controller = require('../controller/controller');

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
        console.log(email);

        const findStudentByEmail = await controller.selectStudentByEmail(email);
        const findStaffByEmail = await controller.selectStaffByEmail(email);

        if (findStudentByEmail.length > 0) {
            console.log("Email already Exist");
            res.json({success: false, message: "Email already Exist"});
        } else if (findStaffByEmail.length > 0) {
            console.log("Email already Exist");
            res.json({success: false, message: "Email already Exist"});
        } else {
            await controller.enrollStudents(formData)
            console.log('Successifully Enrolled');
            res.json({success: true, message: 'Successifully Enrolled' });
        }
    } catch(error) {
        res.json({success: false, error: error.message});
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
            } else  {
                console.log(' Student Please Check the password and the email')
            }
        } else if(findStaffByEmail.length > 0) {
            console.log('Email found Please')
            const password = findStaffByEmail[0].password;
            if(userPassword === password) {
                console.log('Staff Login successiful');
            } else  {
                console.log(' Staff Please Check the password and the email')
            }
        }else {
            console.log('Email address not found Please Enroll')
        }
    } catch (error) {
        res.json({success: false, error: error.message});
    }
});

module.exports = routes;