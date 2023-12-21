import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Contact = () => {
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    const message_api = `${process.env.REACT_APP_API_URL}/api/messageUs`;

    for (const key in formData) {
      if(formData[key] === '') {
        toast.error(`${key} is empty, Please fill`);
        return false
      }
    }

    try {
      const response = await axios.post(message_api, formData);
      const success = response.data.success;
      if(success) {
        setFormData({
          name: '',
          email: '',
          text: '',
        });
        toast.success(response.data.message);
      }else {
        toast.error(response.data.message);
      }
    } catch(error) {
      toast.error(error.message);
    }
    console.log(formData);
  }
  return (
    <>
    <Header />
      <div className='contact-page'>
        <div className="contact-page-details">
          <ToastContainer />
          <div className="contact-title">
            <h1>Contact</h1>
          </div>
          <div className="contact-form-title">
            <span></span>
            <p>Contact Us</p>
          </div>
          <div className="contact-detail">
            <div className="contact-image">
              <img src="../../images/pexels-chepté-cormani-1416530.jpg" alt="" />
            </div>
            <div className="contact-form">
              <div className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="name-email">
                    <div className="name">
                      <label htmlFor="name">Name:</label>
                      <input type="text"
                      name='name'
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="email">Email:</label>
                      <input type="email" 
                      name='email' 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" 
                  id="message" cols="30"
                   rows="10"
                   value={formData.text}
                   onChange={(e) => setFormData({...formData, text: e.target.value})}
                   ></textarea>
                  <div className="button">
                    <button type='submit'>Submit</button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          <div className="location-map">
          
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

export default Contact