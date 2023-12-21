import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import About from './pages/components/About';
import Contact from './pages/components/Contact';
import Courses from './pages/components/Courses';
import Enroll from './pages/components/Enroll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/enroll' element={<Enroll />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/studentPortal' element={<StudentPortal />} /> */}
        {/* <Route path='/staffPortal' element={<StaffPortal />}>
          <Route path='' element={<Student />} />
          <Route path='enrollmentList' element={<EnrollmentList />} />
          <Route path='coursesList' element={<CoursesList />} />
          <Route path='lecturer' element={<Lectures />} />
        </Route> */}
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
