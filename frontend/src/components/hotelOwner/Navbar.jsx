import { assets } from '@/assets/assets'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-400 bg-white transition-all duration-300'>
        <Link to="/">
        <img src={assets.logo} className='invert' alt='logo'/>
        </Link>
        <UserButton/>
    </div>
  )
}

export default Navbar