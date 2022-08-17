import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCut, FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-50'>
      <div className='fixed top-0 left-0 w-full h-16 flex items-center justify-center shadow-md bg-white'>
        <div className='w-11/12 h-full flex items-center justify-between'>
          <Link href="/">
            <div className='w-auto flex items-center space-x-2 cursor-pointer'>
              <FaCut className='text-3xl text-blue-700' />
              <p className='font-medium text-xl text-blue-700'>Short it</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='w-11/12 h-auto flex flex-col items-center space-y-7'>
        <div className='w-full h-auto flex items-center justify-between space-x-2'>
          <input
            className='w-9/12 h-12 px-2 text-sm font-light rounded-sm border-2 border-blue-700 shadow-md bg-white placeholder-blue-200'
            type="text"
            placeholder={origin} />
          <button className='h-full w-3/12 text-sm rounded-sm font-semibold text-white bg-blue-700'>Short</button>
        </div>
        <FaArrowDown className='text-3xl text-blue-700' />
        <input
          disabled
          className='w-full h-12 px-2 text-sm font-light rounded-sm border-2 border-blue-700 shadow-md bg-white placeholder-blue-200'
          type="text"
          placeholder={`${origin}/vwxyz`} />
      </div>
    </div>
  );
}

export default Home;