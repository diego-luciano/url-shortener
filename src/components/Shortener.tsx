import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaHistory, FaSpinner } from 'react-icons/fa';
import validUrl from 'valid-url';

const Shortener = () => {
    const [origin, setOrigin] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setOrigin(window.location.href);
    }, []);

    const onButtonClick = async (url: string) => {
        if (validUrl.isUri(url)) {
            setIsLoading(true);
            const req = await axios.post('/api/shortener/create', { url });
            const res = await req.data;
            setInputValue(`${origin}${res.tag}`);
            setIsLoading(false);
        }
    }

    return (
        <div style={{ background: '#E1E7EC' }} className='w-full h-auto px-6 py-4 flex flex-col space-y-4 items-center rounded-2xl xl:flex-row xl:h-14 xl:space-y-0'>
            <div className='w-full h-auto flex items-center justify-between xl:w-2/12 xl:justify-center'>
                <div className='w-auto h-full flex items-center space-x-2'>
                    <div className='w-4 h-4 rounded-full bg-red-500'></div>
                    <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                    <div className='w-4 h-4 rounded-full bg-green-500'></div>
                </div>
                <div className='w-auto h-full ml-6 flex items-center space-x-4'>
                    <FaArrowLeft className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
                    <FaArrowRight className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
                    <FaHistory className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
                </div>
            </div>
            <div className='w-full h-14 flex items-center xl:w-9/12'>
                <div className='w-full h-3/5 px-4 flex items-center space-x-2 rounded-2xl bg-white'>
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isLoading}
                        placeholder={origin}
                        type="text"
                        className="w-full h-full mr-2 text-sm bg-transparent font-semibold text-gray-500 placeholder-slate-200" />
                    {isLoading ? <FaSpinner className='p-2 text-3xl rounded-md text-gray-800 animate-spin' /> : null}
                </div>
            </div>
            <div className='w-full xl:w-auto h-auto flex items-center space-x-2'>
                <button
                    disabled={!validUrl.isUri(inputValue) || isLoading}
                    onClick={() => onButtonClick(inputValue)}
                    className='w-full xl:w-auto xl:px-3 xl:ml-4 h-8 text-sm font-semibold text-center rounded-md text-gray-500 bg-gray-100 disabled:text-gray-300 disabled:bg-gray-50'>
                    Short it!
                </button>
            </div>
        </div>
    )
}

export default Shortener