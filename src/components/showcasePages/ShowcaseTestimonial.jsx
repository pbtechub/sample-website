import React from 'react'
import { useState } from 'react';
import { showcaseCards } from '../../data/dummy'

const ShowcaseTestimonial = () => {
    const [filterCards, setFilterCards] = useState(showcaseCards);

   return (
    <div className='flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {filterCards.map((card, index)=> (
                <div 
                    key={card.id}
                    className={`bg-gradient-to-b from-slate-800 to-slate-900 w-full mx-auto h-auto bg-slate-800 p-5 rounded-lg hover:shadow-lg cursor-pointer`}>
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
  )
}

export default ShowcaseTestimonial