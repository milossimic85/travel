import React from 'react'
import SearchBox from '../Helper/SearchBox'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video src='/images/hero1.mp4' autoPlay muted loop preload='metadata' 
      className='w-full h-full object-cover' />
      <div className="absolute z-[100] w-full h-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center w-full h-full justify-center flex-col">
          <div>
          <h1 className='text-[25px] lg:text-[55px] uppercase tracking-[0.7rem] xl:[45px] mb-4 md:mb-0 text-center font-semibold text-white'>Let&apos;s enjoy the nature!</h1>
          <p className='md:text-based text-center font-normal text-lg [word-spacing:5px] text-white'>Get the best prices on 2,000,000+ properties,worldwide</p>
         </div>
         <SearchBox/>
      </div>
    </div>
    </div>
  )
}

export default Hero
