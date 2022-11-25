import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const ShowcaseHome = ({ getStarted, setGetStarted, activeSearch,setActiveSearch }) => {
  return (
    <div>
        <h1 className='text-white text-center text-4xl lg:text-6xl font-bold'>Rapidly build modern websites without ever leaving your HTML.</h1>
        <p className='text-gray-500 text-xl text-center mt-5 font-semibold'>
            A utility-first CSS framework packed with classes like {''}
            <span className='text-cyan-400'>flex, pt-4, text-center</span> and {''}
            <span className='text-cyan-400'>rotate-90</span> that can be 
            composed to build any design, directly in your markup.
        </p>
        <div className='mt-5 md:flex justify-center'>
            <button 
                onClick={() => setGetStarted(!getStarted)}
                className='bg-cyan-600 w-full md:w-[25%] lg:w-[12.5%] py-3 rounded-lg text-white text-sx font-semibold mr-5'>Get started</button>
            <button 
                onClick={() => setActiveSearch(! activeSearch)}
                className='hidden bg-gray-800 w-full md:w-[40%] lg:w-[35%] py-3 px-5 rounded-lg text-white text-sx font-semibold md:flex justify-between'>
                    <div className='flex items-center'>
                        <AiOutlineSearch className='text-xl text-gray-400'/>
                        <p className='text-sm ml-5 text-gray-300'>Quick search...</p>
                       
                    </div>
                    <p className='text-gray-500'>Ctrl K</p>
            </button>
        </div>
    </div>
  )
}

export default ShowcaseHome