import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Filter from './components/Filter'
import WhatsNew from './components/WhatsNew'
import RangeProducts from './components/RangeProducts'
import Partnership from './components/Partnerhip'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Filter/>
      <WhatsNew/>
      <RangeProducts/>
      <Partnership/>
      <Footer/>
    </div>
  )
}

export default App