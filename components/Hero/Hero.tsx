'use client'
import React, { useEffect, useState } from 'react'
import SearchBox from '../Helper/SearchBox'
import Link from 'next/link';

const Hero = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Make an API call to your 'api/skijasi' endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('/api/skijasi');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video src='/images/4274798-uhd_3840_2160_25fps.mp4' autoPlay muted loop preload='metadata' 
      className='w-full h-full object-cover' />
      <div className="absolute z-[100] w-full h-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center w-full h-full justify-center flex-col">
          <div>
          <h1 className='text-[25px] lg:text-[55px] uppercase tracking-[0.7rem] xl:[45px] mb-4 md:mb-0 text-center font-semibold text-white'>Let&apos;s enjoy the Skiing!</h1>
          <p className='md:text-based text-center font-normal text-lg [word-spacing:5px] text-white'>Get the best prices on 2,000,000+ properties,worldwide</p>
         </div>
         <SearchBox/>
         <Link
  href="#"
  className=' rounded px-14 md:px-28 py-2.5 -mt-4 overflow-hidden bg-rose-600 relative 
         hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
         hover:ring-red-400 transition-all ease-out duration-300'>
  <span className='absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform
  translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease'></span>
  <span className='relative font-bold'>Search</span>
</Link>
      </div>
    </div>
    </div>
  )
}

export default Hero
