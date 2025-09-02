import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setSuccess('Login successful!');
      setEmail('');
      setPassword('');
    } catch (err) {
      const message = (err as any)?.response?.data?.message || 'Login failed';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google login success:', credentialResponse);
    setSuccess('Google login successful!');
  };

  const handleGoogleError = () => {
    setError('Google login failed. Please try again.');
  };

  const handleSocialLogin = (provider: string) => {
    setError('');
    setSuccess(`Logging in with ${provider}...`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Viziopath
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Sign in to explore internships, job opportunities, and more.
        </p>
      </div>

      {/* Login Section */}
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200 -mt-20"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-600">Sign in with Google or email</p>
          </motion.div>

          {/* Google Login */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="filled_blue"
              size="large"
              text="continue_with"
              width="100%"
            />
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </motion.button>
          </form>

          {/* Error/Success Messages */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 text-center rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 text-center rounded-lg">
              {success}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
