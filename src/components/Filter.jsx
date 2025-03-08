import React, { useState } from "react";
import { Heart, ShoppingCart } from 'lucide-react';
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineColorLens } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";

const Filter = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pride Rainbow Tee",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "rainbow"
    },
    {
      id: 2,
      name: "Trans Pride Hoodie",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "blue"
    },
    {
      id: 3,
      name: "Bisexual Pride Bracelet",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "purple"
    },
    {
      id: 4,
      name: "Lesbian Pride Tote",
      price: 1099,
      image:
        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "pink"
    },
    {
      id: 5,
      name: "Non-Binary Pride Cap",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "yellow"
    },
    {
      id: 6,
      name: "Pride Flag Pin Set",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "rainbow"
    },
    {
      id: 7,
      name: "Pansexual Pride Scarf",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "yellow"
    },
    {
      id: 8,
      name: "Asexual Pride Beanie",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "purple"
    }
  ]);

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const applyFilter = (filterType) => {
    setSelectedFilter(filterType);
    
    let sortedProducts = [...products];
    
    if (filterType === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filterType === 'highToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    
    setProducts(sortedProducts);
    setShowFilterOptions(false);
  };

  const applyColorFilter = (color) => {
    setColorFilter(color);
    setShowFilterOptions(false);
  };

  const getFilteredProducts = () => {
    if (colorFilter) {
      return products.filter(product => product.color === colorFilter);
    }
    return products;
  };

  const colors = [
    { name: "Rainbow", value: "rainbow", bg: "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" },
    { name: "Pink", value: "pink", bg: "bg-pink-500" },
    { name: "Blue", value: "blue", bg: "bg-blue-500" },
    { name: "Purple", value: "purple", bg: "bg-purple-500" },
    { name: "Yellow", value: "yellow", bg: "bg-yellow-500" },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600">Express yourself with our curated collection</p>
          </div>
          
          <div className="relative mt-4 md:mt-0">
            <button 
              onClick={toggleFilterOptions}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-sm border border-gray-200"
            >
              <span className="font-medium">Filter & Sort</span>
              <FaFilter className="text-purple-600" />
              {showFilterOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            
            {showFilterOptions && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
                <div className="p-3 border-b border-gray-200">
                  <h3 className="font-medium text-gray-800 flex items-center gap-2">
                    <TbArrowsSort /> Sort by Price
                  </h3>
                  <div className="mt-2 space-y-2">
                    <button 
                      onClick={() => applyFilter('lowToHigh')}
                      className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedFilter === 'lowToHigh' ? 'bg-purple-100 text-purple-800 font-medium' : ''}`}
                    >
                      Price: Low to High
                    </button>
                    <button 
                      onClick={() => applyFilter('highToLow')}
                      className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedFilter === 'highToLow' ? 'bg-purple-100 text-purple-800 font-medium' : ''}`}
                    >
                      Price: High to Low
                    </button>
                    <button 
                      onClick={() => applyFilter('highToLow')}
                      className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedFilter === 'highToLow' ? 'bg-purple-100 text-purple-800 font-medium' : ''}`}
                    >
                      T shirts
                    </button>
                    <button 
                      onClick={() => applyFilter('highToLow')}
                      className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedFilter === 'highToLow' ? 'bg-purple-100 text-purple-800 font-medium' : ''}`}
                    >
                      Accessories
                    </button>
                    <button 
                      onClick={() => applyFilter('highToLow')}
                      className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedFilter === 'highToLow' ? 'bg-purple-100 text-purple-800 font-medium' : ''}`}
                    >
                      Trousers
                    </button>
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="font-medium text-gray-800 flex items-center gap-2">
                    <MdOutlineColorLens /> Filter by Pride Flag
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => applyColorFilter(color.value)}
                        className={`flex flex-col items-center p-2 rounded-md hover:bg-gray-100 ${colorFilter === color.value ? 'bg-purple-100 ring-2 ring-purple-500' : ''}`}
                      >
                        <span className={`w-6 h-6 rounded-full ${color.bg} border border-gray-300`}></span>
                        <span className="text-xs mt-1">{color.name}</span>
                      </button>
                    ))}
                    {colorFilter && (
                      <button
                        onClick={() => setColorFilter(null)}
                        className="text-xs text-purple-600 hover:text-purple-800 mt-2 underline"
                      >
                        Clear filter
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Active Filters */}
        {(selectedFilter || colorFilter) && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedFilter && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {selectedFilter === 'lowToHigh' ? 'Price: Low to High' : 'Price: High to Low'}
                <button 
                  onClick={() => setSelectedFilter(null)} 
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </span>
            )}
            {colorFilter && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Flag: {colorFilter.charAt(0).toUpperCase() + colorFilter.slice(1)}
                <button 
                  onClick={() => setColorFilter(null)} 
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getFilteredProducts().map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Quick Action Buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <Heart className="h-5 w-5 text-pink-500" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <ShoppingCart className="h-5 w-5 text-purple-600" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
                
                {/* Pride Flag Indicator */}
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-xs text-gray-500">Pride Flag:</span>
                  <span className={`w-4 h-4 rounded-full ${product.color === 'rainbow' ? 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500' : 
                    product.color === 'pink' ? 'bg-pink-500' : 
                    product.color === 'blue' ? 'bg-blue-500' : 
                    product.color === 'purple' ? 'bg-purple-500' : 'bg-yellow-500'
                  } border border-gray-300`}></span>
                </div>
                
                {/* Add to Cart Button */}
                <button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
