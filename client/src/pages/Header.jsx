import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const[toggleOpen, setToggleOpen] = useState(false);
    const [openPortal, setOpenPortal] = useState(false);
    const [adminList, setAdminList] = useState(false);

    const handleBackHome = () => {
        navigate('/');
    }

    const handleDropDown = () => {
        setOpenPortal(true);
    }
    
    const handleDropDownClose = () => {
        setOpenPortal(false);
    }

    const handleDropDownAdmin = () => {
        setAdminList(true);
    }
    const handleDropDownAdminClose = () => {
        setAdminList(false);
    }

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if(currentScrollY > prevScrollY) {
                setToggleOpen(false);
            }
            setIsHeaderVisible(currentScrollY <= prevScrollY || currentScrollY < 50);
            prevScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


      const handleToggle = () => {
        setTimeout(() => {
            setToggleOpen(!toggleOpen);
        }, 100)
      }

  return (
    <div className='header' onMouseLeave={handleDropDownClose}>
        <div className="social-links">
            <div className="lin">

            </div>
                <div className="links">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div> 
        </div>
            <nav className={`${isHeaderVisible ? 'header--visible': 'header--hidden'}`}>
                <div className="logo" onClick={handleBackHome}>
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
                    {/* <div className="portal-login" onMouseLeave={handleDropDownClose}>
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
                    </div> */}
                    {/* <div className="portal-login" onMouseLeave={handleDropDownAdminClose}>
                        <div className="portal-main-link" >
                            <Link  className='portal' to="" onMouseEnter={handleDropDownAdmin} >Admin List</Link>
                        </div>
                        {adminList && (
                            <div className="portal-dropdown" onMouseLeave={handleDropDownAdminClose}>
                                <Link to=''>Students List</Link>
                                <Link to='enrollmentList'>Enrollment List</Link>
                                <Link to='coursesList'>Courses List</Link>
                                <Link to='lecturer'>Lecturer List</Link>
                            </div>
                        )}
                    </div> */}
                    </div>
                    <div className="small-screen">
                        <div className="apply-link">
                            <Link  className ='apply-now' to="/enroll">Apply Now</Link>
                        </div>
                        <div className="toggle">
                            <div className="toggle-bar"  >
                                {toggleOpen ? 
                                (<FontAwesomeIcon icon={faXmark}  onClick={handleToggle} className='close-bar' size='2x'/>) : 
                                (<FontAwesomeIcon icon={faBars} onClick={handleToggle} className='open-bar' size='2x' /> )}
                            </div>
                            {toggleOpen && (
                                <div className="toggle-details">
                                    <div className="toggle-links">
                                        <Link to="/">Home</Link>
                                        <Link to="/courses">Courses</Link>
                                        <Link to="/contact">Contact</Link>
                                    </div>  
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
  )
}

export default Header;