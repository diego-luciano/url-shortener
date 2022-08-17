import React, { useEffect, useState } from 'react'
import Shortener from '../components/Shortener';

const Home = () => {
  return (
    <div style={{ background: '#EBF0F3' }} className='w-screen h-screen flex items-center justify-center'>
      <div className='w-9/12 h-auto flex flex-col'>
        <div className='w-full h-auto flex-col space-y-2 xl:space-y-6 text-4xl md:text-6xl font-bold text-gray-600'>
          <p>when</p>
          <p>the shorter,</p>
        </div>
        <div className='w-full h-auto my-5 md:my-8 xl:my-12'>
          <Shortener />
        </div>
        <p className='text-4xl md:text-6xl font-bold text-gray-600'>the better.</p>
      </div>
    </div>
  )

}

export default Home;