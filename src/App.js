import React, { useState} from 'react';
import GetStarted from './components/GetStarted';
import Navbar  from './components/Navbar';
import Showcase from './components/Showcase';
import { BrowserRouter, Routes } from 'react-router-dom';
import SearchSpace from './components/SearchSpace';
import SideMenu from './components/SideMenu';
import Sidebar from './components/Sidebar';



const App = () => {
    const [getStarted, setGetStarted] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className=''>
      <BrowserRouter>
      <div className={`${ activeMenu || activeSearch || sideMenu ? 'blur-[4px]' : 'blur-none'} opacity-[1]`}>
      <div className={`${ activeMenu || activeSearch || sideMenu ? 'absolute w-full h-full top-0 left-0 bg-slate-900  opacity-[0.9]' : 'hidden'}`}></div>
       <Navbar 
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          sideMenu={sideMenu}
          setSideMenu={setSideMenu}
          getStarted={getStarted}
          setGetStarted={setGetStarted}
          />

          {getStarted ? <GetStarted 
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}/> : 
          <Showcase 
            getStarted={getStarted}
            setGetStarted={setGetStarted}
          />}
             
        </div>

        {activeMenu ? (
        <div 
          className={`${activeMenu ? 'opacity-[1] blur-none' : ''} absolute top-0 left-0 w-80 bg-slate-800 h-auto overflow-y-hidden opacity-1 z-10`}> 
          <Sidebar 
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            />
        </div>
      ) : (
        <div className='w-0'>
          {/* <Sidebar /> */}
        </div>)} 

        <div className={`${activeSearch ? 'block' : 'hidden'} absolute max-w-[800px] h-auto bg-slate-800 top-4 md:top-20 left-3 right-3 mx-auto rounded-lg`}>
          <SearchSpace 
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
            />
        </div>

        <div className={`${sideMenu ? 'block' : 'hidden'}  absolute w-[300px] h-auto bg-slate-800 top-4 md:top-20 right-3 rounded-lg p-5`}>
          <SideMenu 
            sideMenu={sideMenu}
            setSideMenu={setSideMenu}/>
        </div>
      </BrowserRouter>
    </div>
    
  )
}

export default App