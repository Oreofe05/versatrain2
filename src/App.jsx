import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
// import StudentDashboard from './pages/StudentDashboard';
import TestimonialsPage from './pages/TestimonialsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
// import BlogPage from './pages/BlogPage';
// import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
// import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar/>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            {/* <Route path="/course/:id" element={<CourseDetailPage />} /> */}
            {/* <Route path="/dashboard" element={<StudentDashboard />} /> */}
            <Route path="/testimonials" element={<TestimonialsPage />} />
            {/* <Route path="/success-stories" element={<SuccessStoriesPage />} /> */}
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            {/* <Route path="/partnerships" element={<PartnershipsPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/gallery" element={<GalleryPage />} /> */}
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;