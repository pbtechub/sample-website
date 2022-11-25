import React, { useState} from 'react';
import { navMenu } from '../data/dummy';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdOutlineDarkMode} from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai'


const Navbar = (
              { 
              activeSearch, 
              setActiveSearch, 
              sideMenu, 
              setSideMenu, 
              getStarted, 
              setGetStarted }
             ) => {

  const [version, setVersion] = useState(false)
    
  return (
    <div className={`w-full px-3 py-4 md:p-4 bg-slate-900 flex justify-between items-center ${getStarted ? 'border-b-[1px] border-gray-700 sticky top-0 z-30' : ''}`}>
        <div className='flex items-center'>
          <img 
            className='cursor-pointer'
            onClick={() => setGetStarted(!getStarted)}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' width={35} height={35}/>
          <h1 className={`${getStarted ? 'hidden' : 'block'} mx-2 text-white text-2xl md:block font-normal`}>pbtechub</h1>
          <button 
            onClick={() => setVersion(!version)}
            className={`${getStarted ? 'block' : 'hidden'} ml-2 md:0 flex items-center bg-gray-800 hover:bg-gray-700 p-1 px-2 rounded-xl`}>
              <span className='text-xs font-bold text-gray-400'>v3.2.3</span>
              <RiArrowDropDownLine className='text-xl text-gray-400'/>
          </button>
        </div>
        <div>
          <button 
            onClick={() =>{}}
            className={`${!getStarted ? 'xl:hidden' : 'block'} hidden ml-2 md:0 xl:flex items-center bg-slate-800 p-1 px-2 rounded-xl`}>
              <span className='text-xs font-bold text-cyan-400'>Tailwind CSS v3.2: Dynamic breakpoints, container queries, and more</span>
              <RiArrowDropRightLine className='text-xl text-cyan-400'/>
          </button>
        </div>
        <div className='flex'>
          <ul className={`${ !getStarted ? '' : ''} md:flex hidden`}>
            {navMenu.map((item, index) => (
              <li 
              key={item.id}
              className={`${index === navMenu.length - 1 ? 'hidden' : 'block'} px-4 text-white font-semibold hover:text-cyan-400 flex`}
              >
              {item.list} <button className={`${index === navMenu.length - 2 ? 'block' : 'hidden'} rounded-lg text-xs text-cyan-400 bg-slate-800 ml-2 px-2 font-normal`}>New</button>
              </li>
            ))}
            </ul>
            <div className='w-[1px] h-[25px] bg-gray-700 mr-4 hidden md:block'></div>
            <div className='hidden md:flex items-center'>
              <MdOutlineDarkMode className='text-2xl text-cyan-400 cursor-pointer'/>
              <AiFillGithub className='text-2xl text-gray-600 ml-5 hover:text-gray-400 cursor-pointer'/>
            </div>
          <div className='flex items-center md:hidden'>
            <AiOutlineSearch 
              onClick={() => setActiveSearch(! activeSearch)}
              className='mr-5 text-2xl text-gray-500 cursor-pointer'/>
            <BiDotsVerticalRounded 
              onClick={() => setSideMenu(!sideMenu)}
              className='text-2xl text-gray-500 cursor-pointer'/>
          </div>
        </div>
        
        <div className={`absolute left-20 md:left-[195px] top-[50px] bg-slate-800 w-[150px] h-auto rounded-lg ${version ? 'block' :'hidden'}`}>
          <ul>
            <li className='text-xs font-bold text-white p-2 hover:bg-slate-700 cursor-pointer px-3'>v3.2.3</li>
            <li className='text-xs font-bold text-white p-2 hover:bg-slate-700 cursor-pointer px-3'>v3.2.3</li>
            <li className='text-xs font-bold text-white p-2 hover:bg-slate-700 cursor-pointer px-3'>v3.2.3</li>
            <li className='text-xs font-bold text-white p-2 hover:bg-slate-700 cursor-pointer px-3'>v3.2.3</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar