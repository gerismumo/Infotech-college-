import axios from 'axios';
import React, {  useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';
import { coursesDetails, otherCourses } from './Courses';



const Enroll = () => {
    const counties = [{
        "name": "Mombasa",
        "code": 1,
        "capital": "Mombasa City"
    }, {
        "name": "Kwale",
        "code": 2,
        "capital": "Kwale"
    }, {
        "name": "Kilifi",
        "code": 3,
        "capital": "Kilifi"
    }, {
        "name": "Tana River",
        "code": 4,
        "capital": "Hola"
    
    }, {
        "name": "Lamu",
        "code": 5,
        "capital": "Lamu"
    }, {
        "name": "Taita-Taveta",
        "code": 6,
        "capital": "Voi"
    }, {
        "name": "Garissa",
        "code": 7,
        "capital": "Garissa"
    }, {
        "name": "Wajir",
        "code": 8,
        "capital": "Wajir"
    }, {
        "name": "Mandera",
        "code": 9,
        "capital": "Mandera"
    }, {
        "name": "Marsabit",
        "code": 10,
        "capital": "Marsabit"
    }, {
        "name": "Isiolo",
        "code": 11,
        "capital": "Isiolo"
    }, {
        "name": "Meru",
        "code": 12,
        "capital": "Meru"
    }, {
        "name": "Tharaka-Nithi",
        "code": 13,
        "capital": "Chuka"
    }, {
        "name": "Embu",
        "code": 14,
        "capital": "Embu"
    }, {
        "name": "Kitui",
        "code": 15,
        "capital": "Kitui"
    }, {
        "name": "Machakos",
        "code": 16,
        "capital": "Machakos"
    }, {
        "name": "Makueni",
        "code": 17,
        "capital": "Wote"
    }, {
        "name": "Nyandarua",
        "code": 18,
        "capital": "Ol Kalou"
    }, {
        "name": "Nyeri",
        "code": 19,
        "capital": "Nyeri"
    }, {
        "name": "Kirinyaga",
        "code": 20,
        "capital": "Kerugoya/Kutus"
    }, {
        "name": "Murang'a",
        "code": 21,
        "capital": "Murang'a"
    }, {
        "name": "Kiambu",
        "code": 22,
        "capital": "Kiambu"
    }, {
        "name": "Turkana",
        "code": 23,
        "capital": "Lodwar"
    }, {
        "name": "West Pokot",
        "code": 24,
        "capital": "Kapenguria"
    }, {
        "name": "Samburu",
        "code": 25,
        "capital": "Maralal"
    }, {
        "name": "Trans-Nzoia",
        "code": 26,
        "capital": "Kitale"
    }, {
        "name": "Uasin Gishu",
        "code": 27,
        "capital": "Eldoret"
    }, {
        "name": "Elgeyo-Marakwet",
        "code": 28,
        "capital": "Iten"
    }, {
        "name": "Nandi",
        "code": 29,
        "capital": "Kapsabet"
    }, {
        "name": "Baringo",
        "code": 30,
        "capital": "Kabarnet"
    }, {
        "name": "Laikipia",
        "code": 31,
        "capital": "Rumuruti"
    }, {
        "name": "Nakuru",
        "code": 32,
        "capital": "Nakuru"
    }, {
        "name": "Narok",
        "code": 33,
        "capital": "Narok"
    }, {
        "name": "Kajiado",
        "code": 34
    }, {
        "name": "Kericho",
        "code": 35,
        "capital": "Kericho"
    }, {
        "name": "Bomet",
        "code": 36,
        "capital": "Bomet"
    }, {
        "name": "Kakamega",
        "code": 37,
        "capital": "Kakamega"
    }, {
        "name": "Vihiga",
        "code": 38,
        "capital": "Vihiga"
    }, {
        "name": "Bungoma",
        "code": 39,
        "capital": "Bungoma"
    }, {
        "name": "Busia",
        "code": 40,
        "capital": "Busia"
    }, {
        "name": "Siaya",
        "code": 41,
        "capital": "Siaya"
    }, {
        "name": "Kisumu",
        "code": 42,
        "capital": "Kisumu"
    }, {
        "name": "Homa Bay",
        "code": 43,
        "capital": "Homa Bay"
    }, {
        "name": "Migori",
        "code": 44,
        "capital": "Migori"
    }, {
        "name": "Kisii",
        "code": 45,
        "capital": "Kisii"
    }, {
        "name": "Nyamira",
        "code": 46,
        "capital": "Nyamira"
    }, {
        "name": "Nairobi",
        "code": 47,
        "capital": "Nairobi City"
    }]

    // const [countiesList, setCountiesList] = useState([]);
    // const counties_api = `${process.env.REACT_APP_API_URL}/api/counties`;

    // useEffect(() => {
    //     const fetchCounties = async() => {
    //         try {
    //             const response = await axios.get(counties_api);
    //             const success = response.data.success;
    //             if(success) {
    //                 setCountiesList(response.data.data);
    //             }
    //         }catch(error) {
    //             console.log(error.message);
    //         }
    //     }
    //     fetchCounties();
    // },[counties_api]);

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
        const enroll_api = `${process.env.REACT_APP_API_URL}/api/enroll`;

        for(const key in formData) {
            if(formData[key] === '') {
                toast.error(`Please fill all fields`);
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
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        }catch(error) {
            toast.error(error.message);
        }
    }
  return (
    <>
    <Header />
        <div className="enroll-page">
            <div className="enroll-content">
                <ToastContainer />
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
                                        {counties.map((county) => (
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
                <div className="motto-slogan">
                    <div className="motto">
                        <p>Motto</p>
                        <p>" We believe. You belong here!! "</p>
                    </div>
                    <div className="slogan">
                        <p>Slogan</p>
                        <p>" Education for Citizenship "</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default Enroll