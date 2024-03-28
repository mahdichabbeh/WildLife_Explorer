import React from 'react'
import logo from '../logo.svgz';
const Navbar = () => {
  return (
    <div className='w-full h-[75px] flex flex-row items-center justify-center bg-[#2C7865] cursor-pointer'>
        <img src={logo} alt="logo" className=' h-[65px]' />
        <h1 className=' text-[#90D26D] font-semibold text-2xl'>WildLife Explorer</h1>
    </div>
  )
}

export default Navbar