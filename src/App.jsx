import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import NextPage from './pages/NextPage'
import FinalPage from './pages/FinalPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/sign' element={<SignUpPage/>}/>
      <Route path='/payment' element={<FinalPage/>}/>
      <Route path='/tshirts' element={<NextPage/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  )
}

export default App