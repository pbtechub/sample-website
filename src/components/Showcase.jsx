import React from 'react';
import { showcaseCards } from '../data/dummy';
import { AiOutlineSearch } from 'react-icons/ai';

const Showcase = ({ getStarted, setGetStarted }) => {
  return (
    <div className='w-full h-auto bg-slate-900 mx-auto px-5 lg:px-[100px] py-[70px]'>
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
                className='hidden bg-gray-800 w-full md:w-[40%] lg:w-[25%] py-3 px-5 rounded-lg text-white text-sx font-semibold md:flex justify-between'>
                    <div className='flex items-center'>
                        <AiOutlineSearch className='text-xl text-gray-400'/>
                        <p className='text-sm ml-5 text-gray-300'>Quick search...</p>
                    </div>
                    <p className='text-gray-500'>Ctrl K</p>
            </button>
        </div>

        <div className="mx-auto mt-[80px] lg:mt-[100px]">
            <div className='w-full border-y-[1px] border-gray-700 h-10 flex items-center gap-2'>
                {['','',''].map((dot) => (
                    <div className='w-[10px] h-[10px] bg-gray-600 rounded-full'>{dot}</div>
                ))}
            </div>
        </div>

        <div className='flex items-center justify-center flex-col mt-[80px]'>
            <h1 className='text-white text-4xl font-bold text-center'>
                “Best practices” don’t actually work.
            </h1>
            <p className='mt-10 text-gray-500 text-xl font-semibold text-center'>
            I’ve written <span className='text-cyan-400'>a few thousand words</span>  on why traditional “semantic
             class names” are the reason CSS is hard to maintain, but the 
             truth is you’re never going to believe me until you actually 
             try it. If you can suppress the urge to retch long enough to 
             give it a chance, I really think you’ll wonder how you ever 
             worked with CSS any other way.
            </p>
            <div className='m-10 items-center flex'>
                <img 
                    src='https://media.istockphoto.com/id/1419670860/photo/post-it-schedule-or-vision-idea-from-businessman-planning-innovation-strategy-or-future.jpg?b=1&s=170667a&w=0&k=20&c=Wx2ebwudM780zz4gqyDLLDNO0Iw315eJ1QUQIWNuQ5g=' 
                    className='w-[60px] h-[60px] rounded-full mr-2'/>
                <div className='ml-2'>
                    <p className='font-semibold text-white text-lg'>Adam Wathan</p>
                    <p className='text-md text-gray-400'>Creator of Tailwind CSS</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {showcaseCards.map((card, index)=> (
                <div 
                    key={card.id}
                    className={`${ index === 2 ? 'bg-gradient-to-b from-slate-800 to-slate-900' : ''} w-full mx-auto h-auto bg-slate-800 p-5 rounded-lg`}>
                    <div className='flex items-center'>
                    <img 
                        src={card.img} 
                        className='w-[60px] h-[60px] rounded-full mr-2'/>
                        <div className='ml-3'>
                            <p className='font-semibold text-gray-400 text-lg'>{card.person}</p>
                            <p className='text-md text-gray-400'>{card.desig}</p>
                        </div>
                        
                    </div>
                    <p className='text-gray-300 text-sm mt-7'>{card.text}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Showcase