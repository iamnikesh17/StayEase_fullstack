import ExclusiveOffers from '@/components/ExclusiveOffers'
import FeaturedHotels from '@/components/FeaturedHotels'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <FeaturedHotels/>
        <ExclusiveOffers/>
        <Testimonials/>
    </div>
  )
}

export default HomePage