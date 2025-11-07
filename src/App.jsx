import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Login from './pages/Login';
import ConsultationBooking from './pages/ConsultationBooking';
import './styles/global.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/consultation-booking" element={<ConsultationBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;