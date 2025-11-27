import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='min-h-screen mbb-4 bg-cover bg-center items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
        </div>
    )
}

export default Header
