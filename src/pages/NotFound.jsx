import React from 'react';

const NotFound = () => {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519669748347-e2f47da8c7b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MnwwfDF8c2VhY2h8MXx8YmFja3nwnfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500)',
      }}
    >
      <div className="text-center text-white p-8 bg-black bg-opacity-50 rounded-lg animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="text-lg px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-200 transform hover:scale-105"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
