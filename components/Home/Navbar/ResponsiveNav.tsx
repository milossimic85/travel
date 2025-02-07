'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [open, setOpen] = useState(false);
    const handleNavShow = () => setOpen(true);
    const handleNavClose =() => setOpen(false);
  return (
    <div>
      <Nav openNav={handleNavShow}/>
      <MobileNav showNav={open} closeNav={handleNavClose}/>
    </div>
  )
}

export default ResponsiveNav
