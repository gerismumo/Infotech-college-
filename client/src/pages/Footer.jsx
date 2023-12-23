import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        const date = new Date().getFullYear();
        setCurrentYear(date);
    }, []);

    const handleHomePage = () => {
        navigate('/');
        window.scroll(0,0);
    }
    const handleAboutPage = () => {
        navigate('/about');
        window.scroll(0,0);
    }
    const handleCoursePage = () => {
        navigate('/courses');
        window.scroll(0,0);
    }
    const handleContactPage = () => {
        navigate('/contact');
        window.scroll(0,0);
    }
    const handleEnrollPage = () => {
        navigate('/enroll');
        window.scroll(0,0);
    }
  return (
    <div className="footer">
        <div className="footer-details">
            <div className="address-details">
                <div className="address">
                    <div className="footer-logo" onClick={handleHomePage}>
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
                        <p onClick={handleHomePage}>Home</p>
                        <p onClick={handleAboutPage}>About</p>
                        <p onClick={handleCoursePage}>Courses</p>
                        <p onClick={handleEnrollPage}>Enroll</p>
                        <p onClick={handleContactPage}>Contact</p>
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
                <p>&copy; {currentYear} info Tech. All rights reserved.</p>
            </div>
            <div className="developer-details">
               <p>Designed by <span>Winnie</span></p> 
            </div>
        </div>
        
    </div>
  )
}

export default Footer