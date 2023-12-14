import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { coursesDetails, otherCourses } from './Courses'

const Enroll = () => {
    // console.log(coursesDetails);
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
                        <form action="">
                            <div className="form-parts">
                                <div className="form-part1">
                                    <label htmlFor="firstName">FirstName:</label>
                                    <input type="text" name='firstName' />
                                    <label htmlFor="middleName">Middle Name:</label>
                                    <input type="text" name='middleName' />
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text" name='lastName' />
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" />
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="tel" name="phoneNumber" id="phoneNumber" />
                                    <label htmlFor="gender">Gender:</label>
                                    <div className="gender">
                                        <div className="male">
                                            <input type="radio" name="gender" id="gender"  value='Male'/>
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div className="female">
                                            <input type="radio" name="gender" id="gender"  value='Female' />
                                            <label htmlFor="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-part2">
                                    <label htmlFor="county">County:</label>
                                    <select name="county" id="county">
                                        <option value="Mombasa">Mombasa</option>
                                        <option value="Makueni">Makueni</option>
                                    </select>
                                    <label htmlFor="birthDate">Date of Birth:</label>
                                    <input type="date" name="birthDate" id="birthDate" />
                                    <label htmlFor="grade">KCSE Grade:</label>
                                    <select name="grade" id="grade">
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
                                    <select name="course" id="course">
                                        <option value='None'>None</option>
                                        {coursesDetails.map((course) => (
                                            <option key={course.id} value={course.name}>{course.name}</option>
                                        )) }
                                    </select>
                                    <label htmlFor="additionalCourses">Additional Courses:</label>
                                        <select name="additionalCourses" id="additionalCourses">
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