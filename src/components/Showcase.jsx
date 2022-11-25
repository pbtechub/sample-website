import React from 'react';

import ShowcaseTestimonial from './showcasePages/ShowcaseTestimonial';
import ShowcaseHome from './showcasePages/ShowcaseHome';
import CreaterTailwind from './showcasePages/CreaterTailwind';
import ContraintBased from './showcasePages/ContraintBased';
import Footer from './showcasePages/Footer'

const Showcase = ({ getStarted, setGetStarted, activeSearch,setActiveSearch }) => {
  return (
    <div className='w-full h-auto bg-slate-900 mx-auto px-5 lg:px-[50px] py-[70px]'>
        <ShowcaseHome 
             getStarted={getStarted}
             setGetStarted={setGetStarted}
             activeSearch={activeSearch}
             setActiveSearch={setActiveSearch}
             />

        <div className="mx-auto mt-[80px] lg:mt-[100px]">
            <div className='w-full border-y-[1px] border-gray-700 h-10 flex items-center gap-2'>
                {['','',''].map((dot) => (
                    <div key={dot} className='w-[10px] h-[10px] bg-gray-600 rounded-full'>{dot}</div>
                ))}
            </div>
        </div>
        <CreaterTailwind />
        <ShowcaseTestimonial />
        <ContraintBased />
        <Footer />
    </div>
  )
}

export default Showcase