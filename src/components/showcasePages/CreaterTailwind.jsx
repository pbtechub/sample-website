import React from 'react'

const CreaterTailwind = () => {
  return (
    <div className='w-full flex justify-center '>
    <div className='flex items-center justify-center flex-col mt-[80px] lg:my-[150px] lg:w-[800px]'>
        <h1 className='text-white text-4xl lg:text-5xl font-bold text-center'>
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
</div>
  )
}

export default CreaterTailwind