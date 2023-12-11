import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
            <nav>
                <div className="logo">
                    <h2>Info Tech</h2>
                </div>
                <div className="links">
                    <div className="other-link">
                    <Link to="">Home</Link>
                    <Link to="">About</Link>
                    <Link to="">Courses</Link>
                    <Link to="">Contact</Link>
                    <Link to="">Portal Login</Link>
                    </div>
                    <div className="apply-link">
                        <Link  className ='apply-now' to="">Apply Now</Link>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Header