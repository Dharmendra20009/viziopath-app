import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Email Signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      setSuccess("Signup successful! You can now log in.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      const message = err?.response?.data?.message || "Signup failed";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  // Google Signup
  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log("Google signup success:", credentialResponse);
    setSuccess("Google signup successful!");
  };

  const handleGoogleError = () => {
    setError("Google signup failed. Please try again.");
  };

  // Social Signup
  const handleSocialSignup = (provider: string) => {
    setError("");
    setSuccess(`Signing up with ${provider}...`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Viziopath</h1>
        <p className="text-lg md:text-xl opacity-90">
        </p>
      </div>

      {/* Signup Card */}
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200 -mt-20"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">Sign up with Google or email</p>
          </div>

          {/* Google Signup */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="filled_blue"
              size="large"
              text="signup_with"
              shape="rectangular"
              width="100%"
            />
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialSignup("Facebook")}
              className="flex items-center justify-center p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              <FaFacebook className="text-lg" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialSignup("GitHub")}
              className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg"
            >
              <FaGithub className="text-lg" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialSignup("LinkedIn")}
              className="flex items-center justify-center p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg"
            >
              <FaLinkedin className="text-lg" />
            </motion.button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              {isLoading ? "Creating account..." : "Create Account"}
            </motion.button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Sign in
            </a>
          </div>

          {/* Status */}
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

export default Signup;
