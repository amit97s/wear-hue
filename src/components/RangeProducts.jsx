import React, { useState } from "react";

const productImages = {
  "Pride Wallets": "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  "Key Chains": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "Necklaces": "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "Pride Stickers": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
};

const productDescriptions = {
  "Pride Wallets": "Express yourself with our premium pride-themed wallets",
  "Key Chains": "Colorful keychains to showcase your pride everywhere you go",
  "Necklaces": "Elegant necklaces celebrating diversity and love",
  "Pride Stickers": "Vibrant stickers to personalize your belongings",
};

const RangeProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState("Pride Wallets");

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-purple-50 to-pink-50 py-16">
      <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">Explore The Range</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover our exclusive collection of pride-themed accessories designed to help you express your authentic self.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(productImages).map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(item)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                selectedProduct === item 
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md" 
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row gap-6 px-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-full md:w-1/3 bg-white shadow-lg rounded-xl flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img 
                src={productImages[selectedProduct]} 
                alt={selectedProduct} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
              <div className="mb-1 px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Limited Edition</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">{selectedProduct} {index + 1}</h3>
              <p className="text-gray-600 mb-6">{productDescriptions[selectedProduct]}</p>
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-lg font-bold text-gray-900">₹{899 + index * 100}</span>
                <div className="flex">
                  {['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500'].map((color, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${color} ml-1`}></div>
                  ))}
                </div>
              </div>
              <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-lg font-medium transition-all duration-300 ease-in-out hover:opacity-90 hover:shadow-md">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <button className="px-10 py-3 border-2 border-purple-600 text-purple-600 rounded-full text-lg font-medium transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default RangeProducts;