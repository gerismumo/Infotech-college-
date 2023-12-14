import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
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
      </Routes>
    </Router>
  );
}

export default App;
