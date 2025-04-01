import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BACKEND_URL } from '../config/config.url'
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const navigate = useNavigate(); // Add this line at the top with other hooks

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${BACKEND_URL}/auth/signup`, formData);
      setSuccess(response.data.message);
      // Navigate to OTP verification page with email
      navigate('/verify-otp', { state: { email: formData.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
          
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-2xl rotate-45 flex items-center justify-center transform hover:rotate-180 transition-all duration-500">
                <span className="text-white text-2xl font-bold -rotate-45 transform hover:rotate-180 transition-all duration-500">S</span>
              </div>
              <h1 className="mt-6 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Create Account
              </h1>
              <p className="mt-2 text-gray-600 text-center">Join our community and start your journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all duration-300 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all duration-300 outline-none"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all duration-300 outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all duration-300 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all duration-300 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg animate-bounce">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-green-500 text-sm bg-green-50 p-3 rounded-lg animate-pulse">
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <FcGoogle className="text-2xl" />
                  <span className="text-gray-600">Google</span>
                </button>
                <button className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <FaSquareXTwitter className="text-2xl" />
                  <span className="text-gray-600">Twitter</span>
                </button>
              </div>

              <p className="text-center text-gray-600 mt-8">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="font-semibold text-purple-600 hover:text-pink-500 transition-colors duration-300"
                >
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-500/90 mix-blend-multiply"></div>
            <img
              src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="max-w-xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Start Your Journey With Us
                </h2>
                <p className="text-lg text-white/90">
                  Join our community and discover amazing opportunities to grow and connect with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;