import React from 'react'
import { footer } from '../../data/dummy'

const Footer = () => {
  return (
    <div>

            <div className='grid grid-cols-2 lg:grid-cols-4 mt-[100px] py-[50px]'>
                {footer.map((item, index) => (
                    <div 
                        key={index}
                        className={``}>
                        <p className='text-white font-medium mb-3'>{item.title}</p>
                        <ul className='mb-10'>
                        {item.link.map((list, idx) => (
                            <li 
                                key={idx}
                                className={`${idx=== 0 ? 'mt-0' : 'mt-2'}`}>
                                    <a href="" className='text-gray-400 text-sm'>
                                        {list}
                                    </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='flex border-t-[1px] border-gray-600 w-full pt-10'>
                    <img 
                        className='cursor-pointer'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' width={35} height={35}/>
                    <h1 className={`mx-2 text-white text-2xl md:block font-normal`}>pbtechub</h1>
        </div>
    </div>
  )
}

export default Footer