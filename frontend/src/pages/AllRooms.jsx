import { roomsDummyData } from "@/assets/assets";
import StarRating from "@/components/StarRating";
import { CheckCheck, MapPin, Filter } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkbox=({label,selected=false,onChange=()=>{}})=>{
    return (
      <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked,label)} />
        <span>{label}</span>
      </label>
    )
}

const RadioButton=({label,selected=false,onChange=()=>{}})=>{
    return (
      <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input type="radio" name="sortOptions" checked={selected} onChange={(e)=>onChange(label)} />
        <span className="font-light">{label}</span>
      </label>
    )
}
const AllRooms = () => {
    const [openFilter,setOpenFilter]=useState(false)
    const navigate=useNavigate();


    const roomTypes=[
      "Single Bed",
      "Double Bed",
      "Luxury Room",
      "Family Suite"
    ]

    const priceRange=[
      "Rs 1000 - Rs 2000",
      "Rs 2000 - Rs 3000",
      "Rs 3000 - Rs 4000",
      "Rs 4000 - Rs 5000"
    ]

    const sortOptions=[
      "Price: Low to High",
      "Price: High to Low",
      "Newest Price"
    ]



  return (
    <div className="container mx-auto px-4 mt-16  md:px-6 lg:px-32 py-12">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-2">
              Hotel Rooms
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Discover our selection of premium hotel rooms. Each space is
              designed for comfort and equipped with modern amenities to make
              your stay unforgettable.
            </p>
          </div>

          {/* Rooms List */}
          <div className="space-y-8">
            {roomsDummyData.map((room) => (
              <div
                key={room._id}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <img
                onClick={()=>{
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0,0);
                }}
                  src={room.images[0]}
                  alt={room.hotel.name}
                  className="w-full md:w-64 h-56 rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                />

                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">{room.hotel.city}</p>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {room.hotel.name}
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-indigo-600">
                        Rs {room.pricePerNight}
                      </p>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <StarRating />
                    <span className="text-sm text-gray-600">200+ reviews</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{room.hotel.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full"
                      >
                        <CheckCheck className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-700">{amenity}</span>
                      </div>
                    ))}
                    {room.amenities.length > 4 && (
                      <div className="text-xs text-gray-500">
                        +{room.amenities.length - 4} more
                      </div>
                    )}
                  </div>

                  <button onClick={()=>{
                    navigate(`/rooms/${room._id}`);
                    window.scrollTo(0,0);
                  }} className="mt-auto self-start bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters Sidebar */}
        <div className="lg:w-1/3">
          <div className={`sticky top-28 bg-white p-6 ${openFilter && ""} rounded-xl shadow-md`}>
            <div className="flex justify-between items-center gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
              </div>

              <div>
                <p onClick={()=>{setOpenFilter(!openFilter)}} className="text-sm md:hidden text-indigo-600 cursor-pointer">
                    {
                        openFilter?"Hide" : "Show"
                    }
                </p>
              </div>
            </div>

            <div className={`space-y-4 ${openFilter?"block":"hidden md:block"}`}>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Populor filter</h3>
                {/* <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div> */}
                {
                  roomTypes.map((room,index)=>(
                    <Checkbox key={index} label={room} s/>
                  ))
                }
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
                <div className="space-y-2">
                  {/* {[5, 4, 3, 2, 1].map((stars) => (
                    <label
                      key={stars}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600"
                      />
                      <StarRating rating={stars} size={16} />
                      <span className="text-sm text-gray-600">
                        {stars} stars
                      </span>
                    </label>
                  ))} */}

                  {
                    priceRange.map((price,index)=>(
                      <Checkbox key={index} label={price} />
                    ))
                  }
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Sort By</h3>
                <div className="space-y-2">
                  {/* {["WiFi", "Pool", "Breakfast", "Parking", "Gym"].map(
                    (amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="rounded text-indigo-600"
                        />
                        <span className="text-sm text-gray-600">{amenity}</span>
                      </label>
                    )
                  )} */}

                  {
                    sortOptions.map((option,index)=>(
                      <RadioButton key={index} label={option}/>
                    ))
                  }
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
