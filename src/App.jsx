import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import MyCourse from './MyCourse';

const App = () => {
  return (
    <Router>
      <div className="p-4 bg-gray-200 flex gap-4">
        <Link to="/" className="text-blue-600 font-semibold">Home</Link>
        <Link to="/admin" className="text-blue-600 font-semibold">Admin Dashboard</Link>
        <Link to="/classes" className="text-blue-600 font-semibold">Courses</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/classes" element={<MyCourse />} />
      </Routes>
    </Router>
  );
};

export default App;
