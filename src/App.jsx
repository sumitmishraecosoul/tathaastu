import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import FloatingPromoVideo from './components/FloatingPromoVideo';
import ConnectModalButton from './components/ConnectModalButton';
import { ConnectModalProvider } from './contexts/ConnectModalContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './styles/global.css';
import useScrollToTop from './hooks/useScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Courses = lazy(() => import('./pages/Courses'));
const Login = lazy(() => import('./pages/Login'));
const ConsultationBooking = lazy(() => import('./pages/ConsultationBooking'));
const TalkToAstrologers = lazy(() => import('./pages/TalkToAstrologers'));
const AstrologerProfile = lazy(() => import('./pages/AstrologerProfile'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Calculator = lazy(() => import('./pages/Calculator'));
const Store = lazy(() => import('./pages/Store'));
const StoreCategory = lazy(() => import('./pages/StoreCategory'));
const StoreProduct = lazy(() => import('./pages/StoreProduct'));
const UserDashboard = lazy(() => import('./pages/dashboards/UserDashboard'));
const ExpertDashboard = lazy(() => import('./pages/dashboards/ExpertDashboard'));
const AdminDashboard = lazy(() => import('./pages/dashboards/AdminDashboard'));

function ScrollManager() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <AuthProvider>
      <ConnectModalProvider>
        <Router>
          <div className="min-h-screen font-sans">
            <ScrollManager />
            <Suspense fallback={<div className="min-h-[40vh] bg-white" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:slug" element={<CourseDetails />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/user/dashboard"
                  element={
                    <ProtectedRoute roles={["user"]}>
                      <UserDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/expert/dashboard"
                  element={
                    <ProtectedRoute roles={["expert"]}>
                      <ExpertDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/consultation-booking" element={<ConsultationBooking />} />
                <Route path="/talk-to-astrologers" element={<TalkToAstrologers />} />
                <Route path="/talk-to-astrologers/:slug" element={<AstrologerProfile />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/product/:productSlug" element={<StoreProduct />} />
                <Route path="/store/:categorySlug" element={<StoreCategory />} />
              </Routes>
            </Suspense>
            <FloatingPromoVideo />
            <WhatsAppFloatingButton />
            <ConnectModalButton />
          </div>
        </Router>
      </ConnectModalProvider>
    </AuthProvider>
  );
}

export default App;