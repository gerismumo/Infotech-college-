import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Contact from './pages/components/Contact';
import Courses from './pages/components/Courses';
import Enroll from './pages/components/Enroll';
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
        <Route path='/staffPortal' element={<StaffPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
