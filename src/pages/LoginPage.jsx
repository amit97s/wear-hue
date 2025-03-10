import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config/config.url';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`,{ email, password });
      console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.data.token);
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Login Error:', err);
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); 
    }
  }, []);

  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D')" }}>
      <div className='relative w-[90%] max-w-[1200px] p-10 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg flex flex-col md:flex-row items-center'>
        <div className='flex-1 text-white text-left p-5'>
          <h3 className='text-lg font-semibold'>GET READY!</h3>
          <h1 className='text-4xl font-bold mt-2'>YOUR ADVENTURE IS HERE</h1>
          <button className='mt-5 px-6 py-2 bg-white text-black font-semibold rounded-md flex items-center gap-2 hover:bg-gray-300'>
            BEGIN ➜
          </button>
        </div>
        <div className='flex-1 bg-white p-6 rounded-lg shadow-md w-full max-w-[400px]'>
          <div className='flex justify-center mb-4'>
            <span className='text-black font-bold text-lg'>Mountsafari</span>
          </div>
          {error && <p className='text-red-500 text-sm text-center mb-3'>{error}</p>}
          <input type='email' placeholder='Email' className='w-full p-2 mb-3 border rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='w-full p-2 mb-3 border rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className='text-right text-sm mb-3'>
            <a href='#' className='text-blue-500 hover:underline'>Forgot password?</a>
          </div>
          <button onClick={handleLogin} className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800'>LOG IN</button>
          <div className='text-center text-sm mt-3'>
            No account? <a href='/sign' className='text-blue-500 hover:underline'>Create</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
