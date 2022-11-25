import React, { useState} from 'react';
import { HiOutlineMenu } from 'react-icons/hi'
import { RiArrowDropRightLine } from 'react-icons/ri'

const BottomNavbar = ({activeMenu, setActiveMenu}) => {
  
    
  return (
    <div className='w-full px-3 py-4 md:p-4 bg-slate-900 flex justify-start items-center border-b-[1px] border-gray-700 lg:hidden sticky'>
       <HiOutlineMenu 
          className='text-gray-500 text-2xl cursor-pointer z-10'
          onClick={() => setActiveMenu(!activeMenu)}/>
       <p className='flex text-gray-400 ml-5 items-center'>Getting started<RiArrowDropRightLine className='text-2xl'/></p>
       <p className='text-white font-semibold'>Installation</p>
    </div>
  )
}

export default BottomNavbar