import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from "@/assets/roomImg1.png"
import { Button } from './ui/button'
const HotelCard = () => {
  return (
    <Link to="/rooms" className='relative shadow-lg rounded-md' >
        <img src={Image} className='max-w-sm w-full rounded-t-md overflow-hidden bg-white text-gray-500 shadow-md'/>
        <p className='absolute top-3 left-2 bg-white text-gray-700 px-2 py-1 rounded-md text-xs'>Best Seller</p>

        <div className='p-4'>
   <div className='flex justify-between items-center px-2 py-3'>
            <h2 className='font-semibold text-xl text-gray-700'>Urbanza villa</h2>
            <div className='flex gap-2'>
                <img src={assets.starIconFilled}/>
                <span>4.5</span>
            </div>
        </div>

        <div className='flex gap-2'>
            <img src={assets.locationIcon}/>
            <p className='text-sm text-gray-500'>Main road 123 Street, 23 Colany</p>
        </div>

        <div className='flex justify-between items-center py-4'>
            <p className='font-semibold text-xl'>Rs 2000/<span className='text-sm font-medium text-gray-500'>night</span></p>
            <Button size="sm">Book Now</Button>
        </div>
        </div>

     
    </Link>
  )
}

export default HotelCard