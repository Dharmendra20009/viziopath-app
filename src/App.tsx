import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import MOCs from './pages/MOCs';
import JobPortal from './pages/JobPortal';
import Courses from './pages/Courses';
import ResumeBuilder from './pages/ResumeBuilder';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import VideoPage from './pages/VideoPage';
import Payment from './pages/Payment';
import Login from './pages/login';
import Signup from './pages/Signup';
import ResumeManager from './pages/admin/ResumeManager';
import ResumeGallery from './pages/ResumeGallery';
import MyProjects from './pages/MyProjects';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isEditorPage = location.pathname.startsWith('/resume/');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const whatsappNumbers = [
    { number: "6203757233", label: "Support 1" },
    { number: "9507629432", label: "Support 2" },
    { number: "9006259563", label: "Support 3" }
  ];

  return (
    <>
      {!isEditorPage && <Header />}
      <main className={isEditorPage ? "h-screen bg-white" : "min-h-screen bg-white"}>
        {children}
      </main>
      {!isEditorPage && <Footer />}

      {/* WhatsApp Floating Button & Menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Menu Items */}
        {isWhatsAppOpen && (
          <div className="flex flex-col gap-2 mb-2">
            {whatsappNumbers.map((item, index) => (
              <a
                key={index}
                href={`https://wa.me/91${item.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg hover:bg-green-50 flex items-center gap-2 transform transition-all hover:scale-105 border border-green-100"
              >
                <FaWhatsapp className="text-green-500 w-5 h-5" />
                <span className="font-medium text-sm whitespace-nowrap">
                  {item.number}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </button>
      </div>
    </>
  );
}


function App() {
  return (
    <HelmetProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID"}>
        <AuthProvider>
          <Router>
            <Layout>
              <Routes>
                {/* Public Routes (accessible to everyone, but redirect logged-in users away from auth pages) */}
                <Route path="/login" element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                } />
                <Route path="/signup" element={
                  <PublicRoute>
                    <Signup />
                  </PublicRoute>
                } />

                {/* Protected Routes (require login) */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                } />
                <Route path="/mocs" element={
                  <ProtectedRoute>
                    <MOCs />
                  </ProtectedRoute>
                } />
                <Route path="/jobportal" element={
                  <ProtectedRoute>
                    <JobPortal />
                  </ProtectedRoute>
                } />

                <Route path="/speakers" element={
                  <ProtectedRoute>
                    <Courses />
                  </ProtectedRoute>
                } />

                <Route path="/payment" element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                } />
                <Route path="/video" element={
                  <ProtectedRoute>
                    <VideoPage />
                  </ProtectedRoute>
                } />
                <Route path="/apply" element={
                  <ProtectedRoute>
                    <Apply />
                  </ProtectedRoute>
                } />
                <Route path="/contact" element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                } />

                {/* Resume Builder Routes */}
                <Route path="/admin/resume" element={
                  <ProtectedRoute>
                    <ResumeManager />
                  </ProtectedRoute>
                } />
                <Route path="/resumeTemplates" element={
                  <ProtectedRoute>
                    <ResumeGallery />
                  </ProtectedRoute>
                } />
                <Route path="/my-projects" element={
                  <ProtectedRoute>
                    <MyProjects />
                  </ProtectedRoute>
                } />
                <Route path="/resume/:id" element={
                  <ProtectedRoute>
                    <ResumeBuilder />
                  </ProtectedRoute>
                } />

                {/* <Route path="/ai-assistant" element={<AIAssistant />} /> */}
              </Routes>
            </Layout>
          </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </HelmetProvider>
  );
}

export default App;
