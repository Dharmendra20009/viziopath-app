import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MOUs from './pages/MOUs';
import JobPortal from './pages/JobPortal';
import TopAchievers from './pages/TopAchievers';
import Courses from './pages/Courses';
import ResumeBuilder from './pages/ResumeBuilder';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import VideoPage from './pages/VideoPage';
import Payment from './pages/Payment';
import Login from './pages/login';
import Signup from './pages/Signup';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID"}>
      <Router>
        <Header />   {/* Always shows */}
        <main className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mous" element={<MOUs />} />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/top-achievers" element={<TopAchievers />} />
            <Route path="/speakers" element={<Courses />} />
            <Route path="/services" element={<ResumeBuilder />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/ai-assistant" element={<AIAssistant />} /> */}
          </Routes>
        </main>
        <Footer />   {/* Always shows */}
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
