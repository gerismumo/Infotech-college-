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
                    <h2>INSTITUTE OF PROFESSIONAL STUDIES</h2>
                    <p>Nairobi</p>
                    <p>P.O BOX 7964-0610 Nairobi</p>
                    <p>Tel: 0723 487 788 & 0714 661 166</p>
                    <p>Email: infotechinstitude@gmail.com</p>
                </div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faTwitter} className='iconFooter'/>
                    <FontAwesomeIcon icon={faFacebook} className='iconFooter'/>
                    <FontAwesomeIcon icon={faWhatsapp} className='iconFooter'/>
                </div>
            </div>
            <div className="links-details">
                <div className="link-title">
                    <h2>Links</h2>
                </div>
                <div className="links">
                    <Link to="">Home</Link>
                    <Link to="">About</Link>
                    <Link to="">Courses</Link>
                    <Link to="">Contact</Link>
                </div>
            </div>
        </div>
        <div className="bottom-links">
            <div className="copy-right">
                <p>&copy; 2023 info Tech. All rights reserved.</p>
            </div>
            <div className="developer-details">
               <p>Designed by <span>Gerald</span></p> 
            </div>
        </div>
        
    </div>
  )
}

export default Footer