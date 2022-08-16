import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCut } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-50'>
      <div className='fixed top-0 left-0 w-full h-16 flex items-center justify-center shadow-md bg-white'>
        <div className='w-11/12 h-full flex items-center justify-between'>
          <Link href="/">
            <div className='w-auto flex items-center space-x-2'>
              <FaCut className='text-xl text-blue-700' />
              <p className='font-semibold text-base text-blue-700'>Short it</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;