import React from 'react'
import logo from '../logo.svgz';

const Footer = () => {
  return (
    <div className='w-full h-fit bg-[#2C7865] flex flex-row flex-wrap gap-8 justify-center items-center relative'>
        <img src={logo} alt="logo" className=' w-[200px]' />
        <p className=' w-1/2 text-[#90D26D] text-center'>The Wildlife Explorer website is your one-stop destination for discovering and learning about various animals. From lions roaming African savannahs to dolphins navigating ocean depths, the site offers detailed information on habitats, behaviors, diets, and conservation statuses. Explore the fascinating world of wildlife with just a click</p>
        <div className=' absolute bottom-0 right-1 pl-5 text-white pb-5'>
                <p>© 2024 Mehdi Chebbah. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer