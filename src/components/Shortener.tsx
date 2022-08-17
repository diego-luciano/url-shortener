import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaHistory, FaSearch } from 'react-icons/fa';

const Shortener = () => {
    const [origin, setOrigin] = useState('');

    useEffect(() => {
        setOrigin(window.location.href);
    }, []);

    return (
        <div style={{ background: '#E1E7EC' }} className='w-full h-14 px-12 flex items-center rounded-2xl'>
            <div className='w-2/12 h-full flex'>
                <div className='w-auto h-full flex items-center space-x-2'>
                    <div className='w-4 h-4 rounded-full bg-red-500'></div>
                    <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                    <div className='w-4 h-4 rounded-full bg-green-500'></div>
                </div>
                <div className='w-auto h-full ml-6 flex items-center space-x-3'>
                    <FaArrowLeft className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
                    <FaArrowRight className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
                </div>
                <div className='w-auto h-full ml-6 flex items-center'>
                    <FaHistory className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
                </div>
            </div>
            <div className='w-9/12 h-full flex items-center'>
                <div className='w-full h-3/5 px-2 flex items-center space-x-2 rounded-2xl bg-white'>
                    <div className='w-3 h-3 rounded-full bg-blue-200'></div>
                    <input
                        placeholder={origin}
                        type="text"
                        className="w-full h-full text-sm bg-transparent placeholder-slate-200" />
                </div>
            </div>
            <div className='w-auto h-full ml-6 flex items-center'>
                <FaSearch className='p-2 text-3xl rounded-md text-gray-500 bg-gray-100' />
            </div>
        </div>
    )
}

export default Shortener