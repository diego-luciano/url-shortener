import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCut, FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [origin, setOrigin] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [shortedInputValue, setShortedInputValue] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  useEffect(() => {
    if (!inputValue.length) setShortedInputValue('');
  }, [inputValue]);

  const onClickShortLink = async () => {
    const req = await axios.post('/api/shortener/create', { url: inputValue });
    const res = await req.data;
    const uri = `${origin}/${res.tag}`;
    setShortedInputValue(uri);
  }

  const onClickShortenedLink = () => {
    navigator.clipboard.writeText(shortedInputValue);
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-50'>
      <div className='fixed top-0 left-0 w-full h-16 flex items-center justify-center shadow-md bg-white'>
        <div className='w-11/12 h-full flex items-center justify-between'>
          <Link href="/">
            <div className='w-auto flex items-center space-x-2 cursor-pointer'>
              <FaCut className='text-3xl text-blue-700' />
              <p className='font-semibold text-xl text-blue-700'>Short it</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='w-11/12 h-auto flex flex-col items-center space-y-7'>
        <div className='w-12/12 h-12 flex items-center justify-between space-x-2'>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className='w-9/12 h-full px-2 text-sm font-semibold text-blue-700 rounded-sm border-2 border-blue-700 shadow-md bg-white placeholder-blue-200'
            type="text"
            placeholder={origin} />
          <button
            onClick={onClickShortLink}
            className='w-3/12 lg:w-3/12 h-full text-sm rounded-sm font-semibold shadow-md text-white bg-blue-700'>Short it!</button>
        </div>
        <FaArrowDown className='md:hidden text-3xl text-blue-700' />
        <FaArrowRight className='hidden md:flex text-7xl text-blue-700' />
        <div className='w-12/12 h-12' onClick={onClickShortenedLink}>
          <input
            value={shortedInputValue}
            disabled
            className='w-full h-full px-2 text-sm font-semibold rounded-sm border-2 border-blue-700 shadow-md text-blue-700 bg-white placeholder-blue-200 cursor-pointer'
            type="text"
            placeholder={`${origin}/vwxyz`} />
        </div>
      </div>
    </div>
  );
}

export default Home;