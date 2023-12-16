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
                console.log('Staff Login successiful');
                res.json({success: true, message: 'Login Successful', data: findStaffByEmail})
            } else  {
                console.log(' Staff Please Check the password and the email')
                res.json({success: false, message: 'Please check the password and the email'});
            }
        }else {
            console.log('Email address not found Please Enroll')
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
        await controller.deleteOtherCourse(id);
        res.json({success: true, message: 'Course deleted successfully'});
        
    }catch (err) {
        res.json({success: false, message: err.message});
    }
})

module.exports = routes;