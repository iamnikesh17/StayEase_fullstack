import { assets, userBookingsDummyData } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import { Circle, CircleIcon, Users } from 'lucide-react'
import React from 'react'

const MyBookings = () => {
  return (
    <div className='py-20 md:py-28 lg:py-35 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32'>
        <div className='space-y-2 md:space-y-1'>
            <h1 className='font-semibold text-3xl sm:text-4xl font-playfair text-gray-800'>
                My Bookings
            </h1>
            <p className='max-w-3xl font-medium text-sm text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus soluta laudantium libero provident magnam cum fugit id illo, consectetur officia, asperiores, quod assumenda repudiandae aspernatur!    
            </p>
        </div>

        <div className='mt-8 md:mt-10 w-full'>
            {/* Header - hidden on mobile, shown on md+ */}
            <div className='hidden md:grid w-full grid-cols-[3fr_2fr_1fr] border-b border-gray-400 pb-2 gap-4'>
                <div>Hotels</div>
                <div>Date & Timings</div>
                <div>Payment</div>
            </div>

            {userBookingsDummyData.map((booking,index) => (
                <div key={index} className='w-full grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] border-b border-gray-400 py-4 gap-6 md:gap-4'>
                    {/* Hotel Info */}
                    <div className='flex flex-col sm:flex-row gap-4 items-start'>
                        <img 
                            className='w-full sm:w-32 md:w-44 h-48 sm:h-32 md:h-44 object-cover rounded-md' 
                            src={booking.room.images[0]} 
                            alt={booking.hotel.name}
                        />
                        <div className='flex-1 space-y-2'>
                            <h1 className='font-playfair text-2xl md:text-3xl'>{booking.hotel.name}</h1>
                            <div className='flex items-center gap-1'>
                                <img src={assets.locationIcon} alt="Location" className='w-4 h-4'/>
                                <span className='text-sm text-gray-500'>{booking.hotel.address}</span>
                            </div>

                            <div className='flex items-center gap-1'>
                                <Users className='h-4 w-4'/>
                                <span className='text-sm text-gray-500'>Guests: 2</span>
                            </div>

                            <div>
                                <p className='text-base md:text-lg font-semibold'>Total: Rs 1300</p>
                            </div>
                        </div>
                    </div>

                    {/* Dates */}
                    <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start md:items-center'>
                        <div>
                            <p className='font-semibold text-base md:text-lg'>Check-in</p>
                            <span className='text-gray-500 text-sm md:text-base'>{booking.checkInDate.slice(0,10)}</span>
                        </div>

                        <div>
                            <p className='font-semibold text-base md:text-lg'>Check-out</p>
                            <span className='text-gray-500 text-sm md:text-base'>{booking.checkOutDate.slice(0,10)}</span>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className='flex items-start md:items-center justify-between '>
                        {booking.isPaid ? (
                            <span className='flex gap-2 items-center'>
                                <CircleIcon className="text-green-500 h-4 w-4"/>
                                <p className='text-sm font-semibold text-green-500'>Paid</p>
                            </span>
                        ) : (
                            <div className='flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full md:w-auto'>
                                <span className='flex gap-2 items-center'>
                                    <CircleIcon className="text-red-500 h-4 w-4"/>
                                    <p className='text-sm font-semibold text-red-500'>Unpaid</p>
                                </span>
                                <Button variant="outline" className='w-full sm:w-auto'>Pay now</Button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyBookings