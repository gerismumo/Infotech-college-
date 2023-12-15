import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import Header from '../Header';

const StaffPortal = () => {
  return (
    <>
    <Header />
    <div className="staff-portal">
        <div className="staff-portal-content">
          <div className="staff-page-layout">
              <div className="side-bar">
                  <div className="admin-name">
                    <h2>Gerald</h2>
                    <p>Admin</p>
                  </div>
                  <div className="side-links">
                    <Link to=''>Students List</Link>
                    <Link to='enrollmentList'>Enrollment List</Link>
                    <Link to='coursesList'>Courses List</Link>
                    <Link to='lectures'>Lectures List</Link>
                  </div>
                </div>
                <div className="staff-content">
                  <Outlet/>
              </div>
          </div>
            
        </div>
    </div>
    </>
    
  )
}

export default StaffPortal