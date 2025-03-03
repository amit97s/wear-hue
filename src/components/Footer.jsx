import React from 'react';
import { Package, ArrowLeft, Check, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white pt-12 pb-6">
      {/* Rainbow bar */}
      <div className="h-1 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-8"></div>
      
      {/* Service highlights */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 border-b border-gray-200 px-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-purple-600 p-2 text-purple-600">
            <Package size={20} />
          </div>
          <span className="text-sm font-medium">Quick Delivery</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-purple-600 p-2 text-purple-600">
            <ArrowLeft size={20} />
          </div>
          <span className="text-sm font-medium">Easy Returns</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-purple-600 p-2 text-purple-600">
            <Check size={20} />
          </div>
          <span className="text-sm font-medium">Quality Assured</span>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter subscription */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-6">GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 uppercase text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
            
            {/* Social media icons */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Follow us on social media:</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Know Us */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-6">KNOW US</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">About PrideStyle</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Corporate Gifting</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Community Support</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Pride Events</a></li>
            </ul>
          </div>
          
          {/* Helpdesk */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-6">HELPDESK</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Terms Of Use</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Return & Exchange Policy</a></li>
              <li><a href="#" className="text-sm hover:text-purple-600 transition-colors">Privacy & Security Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <div className="flex justify-end max-w-[1280px] mx-auto px-4">
        <button 
          onClick={scrollToTop}
          className="rounded-full border-2 border-purple-500 p-3 text-purple-500 hover:bg-purple-50 transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8">
        <p>© 2025 PrideStyle. All Rights Reserved</p>
        <p className="mt-1">Celebrating diversity, authenticity, and pride every day.</p>
      </div>
    </footer>
  );
};

export default Footer;