import { assets } from "@/assets/assets";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });


 
  return (
    <div>
      <div className="space-y-2">
        <h1 className="font-medium text-3xl">Add Room</h1>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti
          quisquam rerum similique ad ratione!
        </p>
      </div>

      <form  className="mt-5">
        <Label>Images</Label>
        <div className="flex flex-col md:flex-row gap-2 py-4">
          {Object.keys(images).map((key, index) => (
            <label
              className="cursor-pointer"
              htmlFor={`roomImage${key}`}
              key={key}
            >
              <img
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                className="w-24 h-24 object-cover"
              />
              <input
                type="file"
                accept="image/*"
                hidden
                id={`roomImage${key}`}
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>

        <div className="space-y-2 mb-3">
          <Label>Room Type</Label>
          <Select value={inputs.roomType} onValueChange={(value)=>setInputs({...inputs,roomType:value})}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Room Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Single Bed">Single Bed</SelectItem>
              <SelectItem value="Double Bed">Double Bed</SelectItem>
              <SelectItem value="Luxury Room">Luxury Room</SelectItem>
              <SelectItem value="Family Suite">Family Suite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 mb-3">
            <Label>Price Per Night</Label>
            <Input className="w-[180px]" type="number" value={inputs.pricePerNight} onChange={(e)=>setInputs({...inputs,pricePerNight:e.target.value})} />
        </div>

        <div className="space-y-2 mb-3">
            <Label>Amenities</Label>
            <div>
                {Object.keys(inputs.amenities).map((amenity,index)=>(
                    <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={(e)=>setInputs({...inputs,amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity]}})} />
                        <label className="text-sm" htmlFor={`amenities${index+1}`}>{amenity}</label>
                    </div>
                ))}
            </div>
        </div>

        <Button type="submit">Add Room</Button>
      </form>
    </div>
  );
};

export default AddRoom;
