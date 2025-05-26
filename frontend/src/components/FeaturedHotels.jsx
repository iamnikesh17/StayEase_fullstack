import React from "react";
import HotelCard from "./HotelCard";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
const FeaturedHotels = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-gray-100">
      <div className="text-center max-w-xl mx-auto px-6 py-10">
        <h2 className="font-semibold font-playfair text-gray-700 p-4 text-6xl">
          Featured Hotels
        </h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis libero
          quasi eos eius nam ut corrupti expedita fugit, placeat officiis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl px-6 md:px-0 mx-auto mt-20">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>


      <div className="text-center my-10">
      <Button onClick={()=>{navigate("/rooms"); window.scrollTo(0,0)}}>View All Destinations</Button>

      </div>

    </div>
  );
};

export default FeaturedHotels;
