import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import CoursesList from './pages/StaffPages/CoursesList';
import EnrollmentList from './pages/StaffPages/EnrollmentList';
import Lectures from './pages/StaffPages/Lectures';
import Student from './pages/StaffPages/Student';
import Contact from './pages/components/Contact';
import Courses from './pages/components/Courses';
import Enroll from './pages/components/Enroll';
import Login from './pages/components/Login';
import StaffPortal from './pages/components/StaffPortal';
import StudentPortal from './pages/components/StudentPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/enroll' element={<Enroll />} />
        <Route path='/studentPortal' element={<StudentPortal />} />
        <Route path='/staffPortal' element={<StaffPortal />}>
          <Route path='' element={<Student />} />
          <Route path='enrollmentList' element={<EnrollmentList />} />
          <Route path='coursesList' element={<CoursesList />} />
          <Route path='lecturer' element={<Lectures />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
