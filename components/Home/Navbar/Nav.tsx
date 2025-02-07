'use client'

import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type  Props = {
    openNav : ()=>void;
}

const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg]= useState(true);

  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    }
      window.addEventListener("scroll", handler);
      return ()=> window.removeEventListener("scroll",handler);
    
  },[])
  return (
    <div className={` ${navBg? 'bg-blue-950 shadow-md':'bg-transparent'} transition-all duration-200 h-[12vh] z-[1000] w-full fixed`}>
      <div className='flex items-center h-full xl:w-[80%] w-[90%] justify-between mx-auto'>
        <div className='flex items-center space-x-2'>
            <div className='flex items-center justify-center rounded-full bg-rose-500 w-10 h-10'>
                <TbAirBalloon className='w-6 h-6 text-white'></TbAirBalloon>
            </div>
            <h1 className='font-semibold text-xl md:tetx-2xl uppercase text-white !important'>Nexa</h1>
        </div>
        <div className="hidden md:flex items-center space-x-10 px-5">
            {NavLinks.map((link)=>{
                return <Link className='' href={link.url} key={link.id}>
                   <p className='relative  font-bold w-fit text-white !important block text-base after:block
                   after:w-full after:h-[3px]  after:absolute after:bg-yellow-300 after:scale-x-0 after:hover:scale-x-100
                   after:transition duration-300 after:origin-center'>{link.label}</p>
                    </Link>
            })}
        </div>
        <div className='flex items-center space-x-4'>
            <button className= 'md:px-12 md:py-2.5 px-8 py-2 text-base transiton all duration-200 text-black bg-white hover:bg-gray-200 rounded-xl'>Book now</button>
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-white cursor-pointer lg:hidden '></HiBars3BottomRight>
        </div>
      </div>
    </div>
  )
}

export default Nav
