import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ConnectModalButton from './components/ConnectModalButton';
import { ConnectModalProvider } from './contexts/ConnectModalContext';
import './styles/global.css';
import useScrollToTop from './hooks/useScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Courses = lazy(() => import('./pages/Courses'));
const Login = lazy(() => import('./pages/Login'));
const ConsultationBooking = lazy(() => import('./pages/ConsultationBooking'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Calculator = lazy(() => import('./pages/Calculator'));

function ScrollManager() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <ConnectModalProvider>
      <Router>
        <div className="min-h-screen font-sans">
          <ScrollManager />
          <Suspense fallback={<div className="min-h-[40vh] bg-white" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/consultation-booking" element={<ConsultationBooking />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Suspense>
          <WhatsAppFloatingButton />
          <ConnectModalButton />
        </div>
      </Router>
    </ConnectModalProvider>
  );
}

export default App;