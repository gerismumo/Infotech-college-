import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Contact = () => {

  return (
    <>
    <Header />
      <div className='contact-page'>
        <div className="contact-page-details">
          <div className="contact-title">
            <h1>Contact</h1>
          </div>
          <div className="contact-form-title">
            <span></span>
            <p>Contact Us</p>
          </div>
          <div className="contact-detail">
            <div className="contact-image">
              <img src="../../images/secretarial.jpg" alt="" />
            </div>
            <div className="contact-form">
              <div className="form">
                <form action="">
                  <div className="name-email">
                    <div className="name">
                      <label htmlFor="name">Name:</label>
                      <input type="text"name='name'/>
                    </div>
                    <div className="email">
                      <label htmlFor="email">Email:</label>
                      <input type="email" name='email' />
                    </div>
                  </div>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" cols="30" rows="10"></textarea>
                  <div className="button">
                    <button type='submit'>Submit</button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          <div className="location-map">
          
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

export default Contact