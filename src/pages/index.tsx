import React, { useEffect, useState } from 'react'
import Shortener from '../components/Shortener';

const Home = () => {
  return (
    <div style={{ background: '#EBF0F3' }} className='w-screen h-screen flex items-center justify-center'>
      <div className='w-9/12'>
        <Shortener />
      </div>
    </div>
  )

}

export default Home;