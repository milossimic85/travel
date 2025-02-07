import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { TbAirBalloon } from 'react-icons/tb'

type Props ={
    showNav: boolean;
    closeNav: ()=> void;
}

const MobileNav = ({showNav,closeNav}:Props) => {

    const openNav = showNav? "translate-x-0": "translate-x-[-100%]"
  return (
    <div>
      <div className={`fixed ${openNav} inset-0 transform transition-all duration-500 z-[1002] w-full h-screen bg-black opacity-70`}></div>
      <div className={`fixed ${openNav} transform z-[1050] space-y-6 transition-all h-full w-[80%] sm:[60%] text-white bg-rose-900 justify-center flex flex-col duration-500 delay-300`}>
        <div className='flex items-center space-x-2'>
                    <div className='flex ml-12 items-center justify-center rounded-full bg-rose-500 w-10 h-10'>
                        <TbAirBalloon className='w-6 h-6 text-white'></TbAirBalloon>
                    </div>
                    <h1 className='font-semibold text-xl md:tetx-2xl uppercase text-white'>Trippy</h1>
                </div>
        {NavLinks.map((link)=>{
        return <Link href={link.url}key={link.id}>
            <p className="text-white text-[20px] w-fit ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.label}</p>
        </Link>})}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8' />
      </div>
    </div>
  )
}

export default MobileNav
