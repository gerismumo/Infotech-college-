import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const StaffPortal = () => {
  return (
    <>
    <Header />
    <div className="staff-portal">
        <div className="staff-portal-content">
            <div className="staff-content">
                <Outlet/>
            </div>
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default StaffPortal