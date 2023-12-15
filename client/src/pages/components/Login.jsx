import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = async(e) => {
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
            const response = await axios.post(login_api, formData);
            const success = response.data.success;
            if(success) {
                toast.success(response.data.message);
                // console.log('response.data.data',response.data.data);
                const loginUser= response.data.data;
                const role =loginUser[0].role;
                if(role === 'student') {
                    navigate('/studentPortal')
                }else if(role === 'staff') {
                    navigate('/staffPortal')
                } else (
                    navigate('/')
                )
            }else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
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
            <ToastContainer />
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