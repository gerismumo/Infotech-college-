import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-details">
            <div className="address-details">
                <div className="address">
                    <div className="footer-logo">
                        <img src="../../images/infotectlogo.jpg" alt="" />
                    </div>
                    <p>Nairobi</p>
                    <p>P.O BOX 7964-0610 Nairobi</p>
                    <p>Tel: 0723 487 788 & 0714 661 166</p>
                    <p>Email: infotechcollege3@gmail.com</p>
                </div>
                <div className="links-details">
                    <div className="link-title">
                        <h2>Links</h2>
                    </div>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/enroll">Enroll</Link>
                    </div>
                </div>
            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faTwitter} className='iconFooter'/>
                <FontAwesomeIcon icon={faFacebook} className='iconFooter'/>
                <FontAwesomeIcon icon={faWhatsapp} className='iconFooter'/>
            </div>
        </div>
        <div className="bottom-links">
            <div className="copy-right">
                <p>&copy; 2023 info Tech. All rights reserved.</p>
            </div>
            <div className="developer-details">
               <p>Designed by <span>Winnie</span></p> 
            </div>
        </div>
        
    </div>
  )
}

export default Footer