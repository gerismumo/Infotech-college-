import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openPortal, setOpenPortal] = useState(false);

    const handleDropDown = () => {
        setOpenPortal(true);
    }
    
    const handleDropDownClose = () => {
        setOpenPortal(false);
    }
  return (
    <div className="header" onMouseLeave={handleDropDownClose}>
        <div className="social-links">
            <div className="social">
                <div className="links">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div> 
            </div>
        </div>
            <nav >
                <div className="logo">
                    <img src='../../images/infotectlogo.jpg' alt='logo' />
                </div>
                <div className="links" >
                    <div className="other-link">
                        <div className="other-part1">
                            <Link to="/">Home</Link>
                            {/* <Link to="/">About</Link> */}
                            <Link to="/courses">Courses</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    <div className="portal-login" onMouseLeave={handleDropDownClose}>
                        <div className="portal-main-link" >
                            <Link  className='portal' to="" onMouseEnter={handleDropDown} >Portal Login</Link>
                        </div>
                        {openPortal && (
                            <div className="portal-dropdown" onMouseLeave={handleDropDownClose}>
                                <Link to='/login'>Student Portal</Link>
                                <span></span>
                                <Link to='/login'>Staff Portal</Link>
                            </div>
                        )}
                        
                    </div>
                    
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