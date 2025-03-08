import React from 'react'

// import Hero from './components/Hero'
import Hero from '../components/Hero'
import Filter from '../components/Filter'
import WhatsNew from '../components/WhatsNew'
import RangeProducts from '../components/RangeProducts'
import Partnership from '../components/Partnerhip'
const Homepage = () => {
  return (
    <div>
         <Hero/>
      <Filter/>
      <WhatsNew/>
      <RangeProducts/>
      <Partnership/>
    </div>
  )
}

export default Homepage