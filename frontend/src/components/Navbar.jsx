import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets'

function Navbar() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // useEffect(() => {
    //     if (showMobileMenu) {
    //         document.body.style.overflow = 'hidden'
    //     } else {
    //         document.body.style.overflow = 'auto'
    //     }
    //     return () => {
    //         document.bbody.style.overflow = 'auto'
    //     }
    // }, [showMobileMenu])

    return (

        <div className="absolute top-0 left-0 w-full z-10 bg-white/10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">

                <div className="flex items-center gap-3 text-white font-bold text-2xl">

                    <img src={assets.logo} className='w-14' />
                    <h2 className="">Real Estate</h2>

                </div>

                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400 duration-200'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400 duration-200'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400 duration-200'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400 duration-200'>Testimonials</a>
                </ul>

                <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-gray-300 duration-200'>Sign Up</button>


                <img src={assets.menu_icon} className='md:hidden w-7' onClick={() => setShowMobileMenu(true)} />
            </div>

            {/* mobile menu */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white/90 transition-all`}>

                <div className='flex justify-end p-6 mt-2'>
                    <img src={assets.cross_icon} className="w-6 transition-all" onClick={() => setShowMobileMenu(false)} />
                </div>
                <ul className='flex flex-col items-center gap-1 mt-0 px-5 text-l font-medium  '>

                    <a href="#Header" className='px-4 py-2 w-full  text-center inline-block' onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#About" className='px-4 py-2 w-full  text-center inline-block' onClick={() => setShowMobileMenu(false)}>About</a>
                    <a href="#Projects" className='px-4 py-2 w-full  text-center inline-block' onClick={() => setShowMobileMenu(false)}>Projects</a>
                    <a href="#Testimonials" className='px-4 py-2 w-full  text-center inline-block' onClick={() => setShowMobileMenu(false)}>Testimonials</a>

                </ul>
            </div>
            {/* <hr className='border-gray-400' /> */}
        </div >

    )
}

export default Navbar
