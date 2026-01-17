import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import MOUs from './pages/MOUs';
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

  return (
    <>
      {!isEditorPage && <Header />}
      <main className={isEditorPage ? "h-screen bg-white" : "min-h-screen bg-white"}>
        {children}
      </main>
      {!isEditorPage && <Footer />}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919507629432"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </>
  );
}

function App() {
  return (
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
              <Route path="/mous" element={
                <ProtectedRoute>
                  <MOUs />
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
  );
}

export default App;
