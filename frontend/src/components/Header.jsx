import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-6 h-[80vh]">
                <h2 className='text-white text-5xl font-bold text-center w-[80%] mt-40'>EXPLORE HOMES THAT FIT YOUR DREAMS</h2>
                <div className="flex gap-8 mt-20">
                    <a href="#Project" className='text-white font-bold border rounded-sm py-2 px-6 hover:bg-blue-500 hover:border-blue-500'>Projects</a>
                    <a href="#Contact" className='text-white bg-blue-500 font-bold rounded-sm py-2 px-6 hover:bg-blue-700 duration-200'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header
