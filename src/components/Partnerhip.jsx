import React from 'react';
import { Star } from 'lucide-react';

const Partnership = () => {
  // Example collaboration data
  const currentCollaboration = {
    name: "Pride Collective",
    description: "Exclusive limited edition collection celebrating diversity and authenticity",
    month: "June 2025",
    backgroundImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  };

  return (
    <div className="w-full flex justify-center py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Collab With</h2>
        
        <div 
          className="w-full h-[80vh] md:h-[100vh] rounded-2xl overflow-hidden relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${currentCollaboration.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-6">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{currentCollaboration.name}</h3>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{currentCollaboration.description}</p>
            <div className="text-lg md:text-xl font-light uppercase tracking-widest">
              Featured Collaboration • {currentCollaboration.month}
            </div>
            
            <button className="mt-10 px-10 py-4 bg-white text-purple-900 rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 shadow-lg">
              Explore Collection
            </button>
          </div>
          
          {/* Pride flag colors as decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-2 flex">
            <div className="flex-1 bg-red-500"></div>
            <div className="flex-1 bg-orange-500"></div>
            <div className="flex-1 bg-yellow-500"></div>
            <div className="flex-1 bg-green-500"></div>
            <div className="flex-1 bg-blue-500"></div>
            <div className="flex-1 bg-purple-500"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-2 flex">
            <div className="flex-1 bg-red-500"></div>
            <div className="flex-1 bg-orange-500"></div>
            <div className="flex-1 bg-yellow-500"></div>
            <div className="flex-1 bg-green-500"></div>
            <div className="flex-1 bg-blue-500"></div>
            <div className="flex-1 bg-purple-500"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 border-l-2 border-t-2 border-white w-16 h-16 opacity-70"></div>
          <div className="absolute bottom-8 right-8 border-r-2 border-b-2 border-white w-16 h-16 opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;