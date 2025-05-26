import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { exclusiveOffers } from '@/assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='max-w-7xl mx-auto py-6'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-4xl font-semibold font-playfair text-gray-700'>Exclusive Offers</h1>
                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero quasi eos eius nam ut corrupti expedita fugit, placeat officiis.</p>
            </div>

            <div className='flex items-center'>
                <Button variant="link">View All Offer</Button>
                <ArrowRight/>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
            {
                exclusiveOffers.map((offer)=>(
                    <div key={offer._id} className={`flex flex-col justify-between bg-no-repeat bg-cover bg-center rounded-md p-6`} style={{backgroundImage:`url(${offer.image})`}}>
                        <p className='bg-white text-gray-700 font-bold w-fit font-playfair  px-2 py-1 mb-2 rounded-xl'>{offer.priceOff}% OFF</p>

                        <div>
                            <h1 className='font-semibold font-playfair text-3xl text-gray-200 mb-1'>{offer.title}</h1>
                            <p className='text-sm text-gray-200'>{offer.description}</p>
                        </div>

                        <p className='text-sm text-gray-200 mt-4'>Expires at {offer.expiryDate}</p>

                        <div className='my-3 flex items-baseline mt-5'>
                            <Button size="sm"  className="text-white bg-blue-500">View Offer</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExclusiveOffers