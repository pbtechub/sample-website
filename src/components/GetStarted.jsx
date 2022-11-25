
import React, { useState} from 'react';
import BottomNavbar from './BottomNavbar';
import Sidebar from './Sidebar';
import Showcase from './Showcase';
import { AiOutlineSearch } from 'react-icons/ai'
const GetStarted = ({ activeMenu, setActiveMenu, activeSearch, setActiveSearch }) => {
  
  return (
    <div>
      
      <div>
       <BottomNavbar 
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          />  

      <div className='flex w-full'>
          <div 
            className={`hidden lg:block w-80 bg-slate-900 h-auto  opacity-1 z-10 px-5`}> 
              <div className='pt-10'>
                  <button 
                      onClick={() => setActiveSearch(! activeSearch)}
                      className='hidden bg-gray-800 w-full  py-3 px-5 rounded-lg text-white text-sx font-semibold lg:flex justify-between mb-8 sticky'>
                          <div className='flex items-center'>
                              <AiOutlineSearch className='text-xl text-gray-400'/>
                              <p className='text-sm ml-5 text-gray-300'>Quick search...</p>
                            
                          </div>
                          <p className='text-gray-500 text-sm'>Ctrl K</p>
                  </button>
              </div>
            
                <Sidebar 
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                />
          </div>
          
            <Showcase />
          

            
        </div> 
      </div>  
    </div>
    
  )
}

export default GetStarted