import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-purple-100 to-pink-100 py-10 overflow-hidden">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative mb-10">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Diverse fashion collection" 
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Express Your True Self</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">Fashion that celebrates diversity, authenticity, and pride</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-900 px-8 py-3 font-medium tracking-wider hover:bg-gray-100 transition-colors rounded-full">
                SHOP THE COLLECTION
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 font-medium tracking-wider hover:bg-white/10 transition-colors rounded-full">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        
        {/* Description Text */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-gray-800 text-lg uppercase tracking-wider font-medium">
            AUTHENTIC DESIGNS CRAFTED WITH LOVE AND PRIDE. CELEBRATE YOUR IDENTITY WITH OUR EXCLUSIVE COLLECTION OF APPAREL AND ACCESSORIES!
          </p>
        </div>
        
        {/* Pride flags/colors bar */}
        <div className="grid grid-cols-6 h-4 rounded-full overflow-hidden mb-12">
          <div className="bg-red-500"></div>
          <div className="bg-orange-500"></div>
          <div className="bg-yellow-500"></div>
          <div className="bg-green-500"></div>
          <div className="bg-blue-500"></div>
          <div className="bg-purple-500"></div>
        </div>
        
        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden group h-64">
            <img 
              src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Apparel" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">T-shirts</h3>
              <button className="text-white bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden group h-64">
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Accessories" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Accessories</h3>
              <button className="text-white bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden group h-64">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Home Decor" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Trousers</h3>
              <button className="text-white bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;