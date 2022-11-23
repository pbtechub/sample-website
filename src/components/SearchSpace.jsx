import React, { useState} from 'react'
import { recent } from '../data/dummy';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { MdLockClock } from 'react-icons/md'


const SearchSpace = ({ activeSearch, setActiveSearch}) => {
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
    <div>
        <div className='flex items-center justify-between p-5 border-b-[1px] border-gray-700'>
            <form 
                onSubmit={handleSubmit}
                >
                <div className='flex'>
                <AiOutlineSearch 
                    className='mr-5 text-2xl text-gray-500'/>
                    <input 
                        placeholder='Search documentation'
                        id='addItem'
                        type='text'
                        required
                        value={searchRecent}
                        onChange={(e) => setSearchRecent(e.target.value)}
                        className='bg-transparent outline-none text-white font-semibold'/>
                        
                </div>
            </form>
            <button 
                onClick={() => setActiveSearch(!activeSearch)}
                className='bg-slate-600 text-[9px] font-semibold text-gray-400 p-1 rounded-md'>
                    ESC
            </button>
        </div>
        
       {recentList.length > 0 ? (
            <div>
                <div className='text-white text-lg font-bold p-5 border-b-[1px] border-gray-700'>
                    <h1>Recent</h1>
                </div>
                {recentList.map((list) => (
                    <div 
                        key={list.id}
                        className='flex items-center justify-between p-5 border-b-[1px] border-gray-700 cursor-pointer hover:bg-slate-700'>
                        
                            <span className='text-gray-500 font-semibold text-md'>
                                {list.item}
                            </span>
                        
                        <div className='flex items-center'>
                            <AiOutlineStar className='text-2xl text-slate-500 cursor-pointer hover:text-cyan-600'/>
                            <div className='w-[1px] h-6 bg-gray-700 mx-5'></div>
                            <AiOutlineClose 
                                onClick={() => {handleDelete(list.id)} }
                                className='text-2xl text-slate-500 cursor-pointer'/>
                        </div>
                    </div>
                ))}
            </div>
       ) : (
            <div className='border-b-[1px] border-gray-700 h-[150px] flex items-center justify-center text-gray-400 text-lg font-semibold'>
                <p className='text-center'>No recent searches</p>
            </div>
            
       )}
        
       
        <div className='flex items-center justify-end p-4 rounded-b-lg'>
            <span className='text-sm font-semibold text-gray-600'>Search by</span>
            <div className='ml-4 mr-2 p-1 bg-gray-400 text-black rounded-md'>
                <MdLockClock className=''/>
            </div>
            <span className='text-gray-400 text-xl font-semibold'>alogolia</span>
        </div>
    </div>
  )
}

export default SearchSpace