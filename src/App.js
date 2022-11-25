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
    const [recentList, setRecentList] = useState(JSON.parse(localStorage.getItem('recentlist')));
    const [searchRecent, setSearchRecent] = useState('');
   
    const addSearch = (item) => {
       const id = recentList.length ? recentList[recentList.length - 1].id + 1 : 1;
       const mySearchRecent = { id, item}
       const searchItems = [...recentList, mySearchRecent]
       console.log(searchItems)
       setRecentList(searchItems)
       localStorage.setItem('recentlist', JSON.stringify(searchItems)) 
    }
   
    
       const handleDelete = (id) => {
          const searchItems = recentList.filter((item) => item.id !== id);
          setRecentList(searchItems)
          localStorage.setItem('recentlist', JSON.stringify(searchItems))
          
       }
   
       const handleSubmit = (e) => {
           e.preventDefault();
           if (!searchRecent) return
           addSearch(searchRecent)  
           
       }

  return (
    <div className=''>
      <BrowserRouter>
      <div className={`${ activeMenu || activeSearch || sideMenu ? 'blur-[4px] lg:blur-0' : 'blur-none'} opacity-[1] lg:opacity-none`}>
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
            setActiveMenu={setActiveMenu}
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}/> : 
          <Showcase 
            getStarted={getStarted}
            setGetStarted={setGetStarted}
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
          />}
             
        </div>

        {activeMenu ? (
        <div 
          className={`${activeMenu ? 'opacity-[1] blur-none' : ''} absolute top-0 left-0 w-80  bg-slate-800 lg:bg-slate-900 h-auto opacity-1 z-10`}> 
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
            recentList={recentList}
            searchRecent={searchRecent}
            setSearchRecent={setSearchRecent}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
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