import React, { useState } from 'react'
import Header from '../Header'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formData',formData);
    }
    const handleEnroll = () => {
        navigate('/enroll');
    }
  return (
    <>
    <Header />
    <div className="login-page">
        <div className="login-content">
            <div className="login-titl">
                <h1>Login</h1>
            </div>
            <div className="login-form">
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
        </div>
    </div>
    </>
    
  )
}

export default Login