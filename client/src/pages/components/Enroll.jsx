import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { coursesDetails, otherCourses } from './Courses';

const Enroll = () => {
    const [countiesList, setCountiesList] = useState([]);
    const counties_api = `${process.env.REACT_APP_API_URL}/api/counties`;

    useEffect(() => {
        const fetchCounties = async() => {
            try {
                const response = await axios.get(counties_api);
                const success = response.data.success;
                if(success) {
                    setCountiesList(response.data.data);
                }
            }catch(error) {
                console.log(error.message);
            }
        }
        fetchCounties();
    },[counties_api]);

    // console.log(countiesList);
    const[formData, setFormData] = useState(
        {
           firstName: '',
           middleName: '',
           lastName: '',
           email: '',
           phoneNumber: '',
           gender: '',
           county: '',
           birthDate:'',
           grade: '',
           course: '',
           additionalCourse: '',
        }
    )
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('formData',formData);
        const enroll_api = `${process.env.REACT_APP_API_URL}/api/enroll`;

        for(const key in formData) {
            if(formData[key] === '') {
                alert(`${key} is empty, Please fill`);
                return;
            }
        } 

        try {
            const response = await axios.post(enroll_api, formData);
            const success = response.data.success;
            if(success) {
                setFormData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    gender: '',
                    county: '',
                    birthDate:'',
                    grade: '',
                    course: '',
                    additionalCourse: '',
                });
                return;
            }
            console.log(response);
        }catch(error) {
            console.log(error.message);
        }
    }
  return (
    <>
    <Header />
        <div className="enroll-page">
            <div className="enroll-content">
                <div className="enroll-title">
                    <h1>Enroll Now</h1>
                </div>
                <div className="enroll-details">
                    <div className="enroll-form-text">
                        <span></span>
                        <p>Enroll Form</p>
                    </div>
                    <div className="enroll-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-parts">
                                <div className="form-part1">
                                    <label htmlFor="firstName">FirstName:</label>
                                    <input type="text" 
                                    name='firstName'
                                    value={formData.firstName} 
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                    />
                                    <label htmlFor="middleName">Middle Name:</label>
                                    <input type="text" 
                                    name='middleName'
                                    value={formData.middleName}
                                    onChange={(e) => setFormData({...formData, middleName: e.target.value})}
                                     />
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text"
                                     name='lastName'
                                     value={formData.lastName}
                                     onChange={(e) => setFormData({...formData, lastName:e.target.value})}
                                      />
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="tel" 
                                    name="phoneNumber" 
                                    id="phoneNumber" 
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                                    />
                                    <label htmlFor="gender">Gender:</label>
                                    <div className="gender">
                                        <div className="male">
                                            <input type="radio" 
                                            name="gender" 
                                            id="gender"  
                                            value='Male'
                                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                            />
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div className="female">
                                            <input type="radio" 
                                            name="gender" 
                                            id="gender"  
                                            value='Female' 
                                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                            />
                                            <label htmlFor="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-part2">
                                    <label htmlFor="county">County:</label>
                                    <select name="county" 
                                    id="county" 
                                    value={formData.county}
                                    onChange={(e) => setFormData({...formData, county: e.target.value})}
                                    >
                                        {countiesList.map((county) => (
                                            <option key={county.code} value={county.name}>{county.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="birthDate">Date of Birth:</label>
                                    <input type="date"
                                     name="birthDate" 
                                     id="birthDate" 
                                     value={formData.birthDate}
                                     onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                                     />
                                    <label htmlFor="grade">KCSE Grade:</label>
                                    <select name="grade" 
                                    id="grade"
                                    value={formData.grade}
                                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                                    >
                                        <option value="A">A</option>
                                        <option value="B+">B+</option>
                                        <option value="B">B</option>
                                        <option value="B-">B-</option>
                                        <option value="C+">C+</option>
                                        <option value="C">C</option>
                                        <option value="C-">C-</option>
                                        <option value="D+">D+</option>
                                        <option value="D">D</option>
                                        <option value="D-">D-</option>
                                        <option value="E">E</option>
                                    </select>
                                    <label htmlFor="course">Course:</label>
                                    <select name="course" 
                                    id="course"
                                    value={formData.course}
                                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                                    >
                                        <option value='None'>None</option>
                                        {coursesDetails.map((course) => (
                                            <option key={course.id} value={course.name}>{course.name}</option>
                                        )) }
                                    </select>
                                    <label htmlFor="additionalCourses">Additional Courses:</label>
                                        <select name="additionalCourses" 
                                        id="additionalCourses"
                                        value={formData.additionalCourse}
                                        onChange={(e) => setFormData({...formData, additionalCourse: e.target.value})}
                                        >
                                            <option value='None'>None</option>
                                        {otherCourses.map((course) => (
                                            <option key={course.id} value={course.name}>{course.name}</option>
                                        )) }
                                        </select>
                                </div>
                            </div>
                            <div className="button">
                                <button type='submit'>Enroll</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="inst-quote">
                    <p>College of choice for developing professionals</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default Enroll