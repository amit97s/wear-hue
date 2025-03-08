import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 p-6">
      <div className="flex max-w-5xl w-full bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-700">Get Started</h2>
            <p className="text-gray-500 text-sm">Create your account today</p>
          </div>
          <form className="mt-6 space-y-4">
          <div>
              <label className="block text-gray-600 text-sm">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Number</label>
              <input
                type="number"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span></span>
              <a href="#" className="text-green-500 hover:underline">Forgot Password?</a>
            </div>
            <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              Sign Up
            </button>
          </form>
          <div className="flex gap-4 items-center justify-center mt-4">
            <p className="text-gray-500 text-sm">Or sign up with</p>
            <FcGoogle className="text-2xl cursor-pointer" />
            <FaSquareXTwitter className="text-2xl text-black cursor-pointer" />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account? <NavLink to={'/login'} style={{color:"#D543AE",fontSize:"17px",fontWeight:"600"}}>Log in</NavLink>
          </p>
        </div>
        
        {/* Right Section */}
        <div className="w-1/2 bg-green-900 flex items-center justify-center p-10 text-white relative" style={{backgroundImage:"url(https://images.unsplash.com/photo-1626204327506-0d3ee11d7752?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ", backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <div className="text-center">

            <div className="mt-6 p-6 bg-transparent rounded-lg shadow-lg text-black w-4/5 mx-auto">
              <p className="text-7xl font-bold opacity-35">Pride</p>
             
            </div>
          </div>
          {/* <div className="absolute bottom-6 right-6 text-xs text-gray-300 italic">*Secure & Fast Transactions</div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;