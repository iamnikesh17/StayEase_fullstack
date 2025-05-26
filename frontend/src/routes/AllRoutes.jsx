import AllRooms from '@/pages/AllRooms'
import HomePage from '@/pages/HomePage'
import AddRoom from '@/pages/HotelOwner/AddRoom'
import Dashboard from '@/pages/HotelOwner/Dashboard'
import Layout from '@/pages/HotelOwner/Layout'
import ListRoom from '@/pages/HotelOwner/ListRoom'
import MyBookings from '@/pages/MyBookings'
import RoomDetail from '@/pages/RoomDetail'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/rooms" element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetail/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>

        <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-room' element={<AddRoom/>}/>
          <Route path='list-room' element={<ListRoom/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AllRoutes