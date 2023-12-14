import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <div className="social-links">
            <div className="social">
                <div className="links">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div> 
            </div>
        </div>
            <nav>
                <div className="logo">
                    <img src='../../images/infotectlogo.jpg' alt='logo' />
                </div>
                <div className="links">
                    <div className="other-link">
                    <Link to="/">Home</Link>
                    {/* <Link to="/">About</Link> */}
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <Link  className='portal' to="">Portal Login</Link>
                    </div>
                    <div className="apply-link">
                        <Link  className ='apply-now' to="/enroll">Apply Now</Link>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Header