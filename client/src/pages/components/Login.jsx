import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formData',formData);

        for(const key in formData) {
            if(formData[key] === "") {
                alert(`${key} is empty`);
                return;
            }
        }

        const login_api = `${process.env.REACT_APP_API_URL}/api/login`;

        try {
            const response = axios.post(login_api, formData);
            console.log(response);
        } catch (error) {
            consol.log(error.message);
        }
    }
    const handleEnroll = () => {
        navigate('/enroll');
    }
  return (
    <>
    <Header />
    <div className="login-page">
        <div className="login-content">
            <div className="login-title">
                <h1>Login</h1>
            </div>
            <div className="login-span">
                <span></span>
                <p>Login Form</p>
            </div>
            <div className="login-form">
                <div className="login-image">
                    <img src="../../images/businessmanagemnet.jpg" alt="" />
                </div>
                <div className="form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" 
                        name='email'
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                         />
                        <label htmlFor="password">Password:</label>
                        <input type="text" 
                        name='password' 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                        <div className="button">
                            <button type='submit'>Login</button>
                        </div>
                        <div className="login-text">
                            <p>Don't have an account? Please <span onClick={handleEnroll}>Enroll</span></p>
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

export default Login