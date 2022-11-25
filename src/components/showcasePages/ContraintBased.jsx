import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { IoIosResize } from 'react-icons/io'
import { HiColorSwatch } from 'react-icons/hi';
import { TbTypography } from 'react-icons/tb';
import { TbShadow } from 'react-icons/tb'
import { BsFillHexagonFill } from 'react-icons/bs'
import { BsCircleFill } from 'react-icons/bs'
import { BsFillTriangleFill } from 'react-icons/bs'
import { FaSquare } from 'react-icons/fa'

const ContraintBased = () => {
  return (
    <div className='mt-20'>
        <div className='w-[70px] h-[70px] rounded-full bg-violet-400 p-0.5 flex justify-center items-center'>
            <div className='w-full h-full rounded-full bg-violet-800 flex justify-center items-center'>
                <div className=''>
                <BsFillHexagonFill className='text-white'/>
                <BsCircleFill className='text-sm text-white'/>
                </div>
                <div className=''>
                <BsFillTriangleFill className='text-white'/>
                <FaSquare className='text-gray-400'/>
                </div>
            </div>
        </div>
        <h2 className='mt-8 text-blue-400 font-semibold text-lg'>
         Constraint-based
        </h2>
        <h1 className='mt-5 text-3xl text-white font-bold lg:text-4xl'>
        An API for your design system.
        </h1>
        <p className='mt-5 text-md text-gray-500 font-semibold lg:w-[750px] lg:text-lg'>
        Utility classes help you work within the constraints of a system instead of littering 
        your stylesheets with arbitrary values. They make it easy to be consistent with color
        choices, spacing, typography, shadows, and everything else that makes up a 
        well-engineered design system.
        </p>
        <button className='mt-8 bg-gray-600 flex items-center px-3 py-1.5 text-center rounded-2xl justify-between text-sm font-semibold text-gray-200'>
            <span className='mb-1'>Learn more</span> <RiArrowDropRightLine className='text-2xl text-cyan-400'/>
        </button>

        <div className='mt-10 flex gap-3'>
            <div className='p-5 w-[120px] h-auto text-center flex flex-col justify-center items-center'>
                <IoIosResize className='w-[50px] h-[50px] text-gray-600'/>
                <p className='text-md text-gray-400 font-medium mt-5'>Sizing</p>
            </div>
            <div className='p-5 w-[120px] h-auto text-center flex flex-col justify-center items-center'>
                <HiColorSwatch className='w-[50px] h-[50px] text-gray-600'/>
                <p className='text-md text-gray-400 font-medium mt-5'>Colors</p>
            </div>
            <div className='p-5 w-[120px] h-auto text-center flex flex-col justify-center items-center'>
                <TbTypography className='w-[50px] h-[50px] text-gray-600'/>
                <p className='text-md text-gray-400 font-medium mt-5'>Typography</p>
            </div>
            <div className='p-5 w-[120px] h-auto text-center flex flex-col justify-center items-center'>
                <TbShadow className='w-[50px] h-[50px] text-gray-600'/>
                <p className='text-md text-gray-400 font-medium mt-5'>Shadows</p>
            </div>
        </div>
    </div>
  )
}

export default ContraintBased