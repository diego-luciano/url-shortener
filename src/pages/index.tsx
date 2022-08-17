import React, { useEffect, useState } from 'react'
import Shortener from '../components/Shortener';

const Home = () => {
  return (
    <div style={{ background: '#EBF0F3' }} className='w-screen h-screen flex items-center justify-center px-12'>
      <Shortener />
    </div>
  )

}

export default Home;