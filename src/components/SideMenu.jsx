import React from 'react'
import { navMenu } from '../data/dummy';
import { AiOutlineClose } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineDarkMode} from 'react-icons/md';

const SideMenu = ({sideMenu, setSideMenu}) => {
  return (
    <div className='relative'>
        <AiOutlineClose 
        onClick={() => setSideMenu(!sideMenu)}
        className='absolute top-0 right-0 text-xl text-gray-400 font-semibold cursor-pointer'/>

        <ul className='flex flex-col '>
            {navMenu.map((item, index) => (
                <li 
                key={item.id}
                className={`${index === 0 ? 'pt-0' : ''} py-3 text-gray-400 font-bold hover:text-cyan-400 flex cursor-pointer`}
                >
                {item.list} <button className={`${index === navMenu.length - 2 ? 'block' : 'hidden'} rounded-lg text-xs text-cyan-400 bg-cyan-900 ml-2 px-2 py-0 font-normal`}>New</button>
                </li>
            ))}
          </ul>

          <div className='border-t-[1px] mt-3 border-gray-600 w-full pt-5 flex justify-between items-center'>
                <span className='text-gray-400 text-md font-[400]'>Switch theme</span>
                <button className='flex items-center bg-gray-600 p-2.5 rounded-lg'>
                    <MdOutlineDarkMode className='text-gray-400 text-xl'/>
                    <span className='mx-2 text-gray-200 font-bold'>Dark</span>
                    <RiArrowDropDownLine className='text-gray-400 text-2xl'/>
                </button>
          </div>
          
    </div>
  )
}

export default SideMenu