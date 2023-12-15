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
        // console.log(formData);
        await controller.enrollStudents(formData)
        res.json({success: true, message: 'Successifully Enrolled' });
    } catch(error) {
        res.json({success: false, error: error.message});
    }
})

module.exports = routes;