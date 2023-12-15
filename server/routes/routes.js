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
        if (findStudentByEmail.length > 0) {
            console.log("Email already Exist");
            res.json({success: false, message: "Email already Exist"});
            return;
        }
            await controller.enrollStudents(formData)
            console.log('Successifully Enrolled');
            res.json({success: true, message: 'Successifully Enrolled' });
    } catch(error) {
        res.json({success: false, error: error.message});
    }
});

module.exports = routes;