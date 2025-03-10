import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import NextPage from './pages/NextPage';
import FinalPage from './pages/FinalPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RoleBasedPrivateRoute from './routers/rolebased-private-route';
import { useShow } from './hooks/useShow';
import AdminDashboard from './pages/Dashboard';

const App = () => {
  const show = useShow();

  return (
    <BrowserRouter>
      {show && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/payment" element={<FinalPage />} />
        <Route path="/tshirts" element={<NextPage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="dashboard/user" element={<RoleBasedPrivateRoute requiredRole="user" />}>
          <Route index element={<div>User Dashboard</div>} />
        </Route>

        <Route path="dashboard/admin" element={<RoleBasedPrivateRoute requiredRole="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<div>profile</div>} />
        </Route>
      </Routes>
      {show && <Footer />}
    </BrowserRouter>
  );
};

export default App;
