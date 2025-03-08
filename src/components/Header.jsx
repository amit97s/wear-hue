import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-purple-600" strokeWidth={2} />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">PrideStyle</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            {/* <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Shop</a> */}
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors ">Collections</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div></div>
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full h-12 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <button className="relative group hidden md:block">
              <User className="h-6 w-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Account</span>
            </button>
            
            <button className="relative group hidden md:block">
              <Heart className="h-6 w-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Wishlist</span>
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-600 text-white text-xs font-bold rounded-full">3</span>
            </button>
            
            <button className="relative group">
              <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Cart</span>
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-600 text-white text-xs font-bold rounded-full">2</span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search - Only visible on small screens */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Shop</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Collections</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Account</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Wishlist</a>
            </nav>
          </div>
        </div>
      )}
      
      {/* Rainbow bar */}
      <div className="h-1 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
    </header>
  );
};

export default Header;