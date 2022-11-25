import React from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { links, menu } from '../data/dummy';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({activeMenu, setActiveMenu}) => {
 
  return (
    <div className='relative p-5 lg:p-0'>
      
      <AiOutlineClose 
        onClick={() => setActiveMenu(!activeMenu)}
        className='absolute top-7 right-7 text-xl text-gray-400 font-semibold cursor-pointer lg:hidden'/>
        <div>
          {menu.map((list, index) => (
            <div>
              <NavLink 
                key={list.name}
                className={`flex items-center ${ index === 0 ? 'mt-0' : 'mt-5' } text-gray-400 font-semibold hover:text-gray-300`}>
                  <div 
                    className='mr-5 bg-gray-700 w-[25px] h-[25px] rounded-md flex items-center justify-center hover:bg-violet-500'>
                    {list.icon}
                  </div>
                  <span className="capitalize">{list.name}</span>
              </NavLink>
            </div>
          ))}
        </div>

        <div>
        {links.map((item, index) => (
              <div key={item.title}
                    className='relative'>
                <p className='text-white text-lg font-semibold mt-5'>
                  {item.title}
                </p>
                {/* <div className='absolute bg-gray-600 w-[0.5px] h-full opacity-2'></div> */}
                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    className='flex items-center mt-5 text-gray-400 font-semibold hover:text-gray-300 pl-5'
                  >
                    {/* {link.icon} */}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar