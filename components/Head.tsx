// Head.tsx
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Head = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
      <Header />
      <Navbar />
    </div>
  )
}

export default Head
