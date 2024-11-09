import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
        <nav className='flex justify-between px-20 my-4 items-center font-poppins w-full'>
            <div className='w-24 h-7'>
                <img src="./src/assets/brand_logo.png" alt="logo"/>
            </div>
            <ul className='flex gap-8 font-medium'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Location</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <button className='w-20 p-1 bg-red-500 text-white rounded-sm'>Login</button>
        </nav>
    </div>
    </>
  )
}

export default Navbar