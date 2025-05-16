   //how to do a hamburger to a mobile menu 
import React, { useState } from 'react'

const LandingPage = () => {
    const [isopen, setIsOpen] = useState(false)
    const handleclick = () => {
        setIsOpen(!isopen)
    }
  return (
    <div>
     <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <nav className='lg:flex hidden'>
            <ul className='flex justify-between items-center bg-gray-200 p-4'>
               <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>

            </ul>
        </nav>
        <div className='lg:hidden w-10 h-10 cursor-pointer bg-blue-700 text-white'onClick={handleclick}>
ss
        </div>
     </header>
      <div className={` ${isopen ? 'bg-blue-800 translate-x-0 ' : '-translate-x-full bg-green-500'} transition-transform duration-500 ease-in-out w-50 h-screen`}>
        <nav className='flex flex-col gap-4'>
            <ul className='flex gap-4 align-center justify-between bg-gray-800 text-white'>
            <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>

      </div>
     

    </div>
  )
}

export default LandingPage
