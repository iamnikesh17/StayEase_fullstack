import { assets, roomCommonData, roomsDummyData } from "@/assets/assets";
import StarRating from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-28 md:py-35 px-6 md:px-16 lg:px-32 bg-gray-200">
        {/* Room Details */}

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="font-semibold text-3xl">
            {room.hotel.name}{" "}
            <span className="font-light text-sm">({room.roomType})</span>{" "}
          </h1>
          <p className="bg-green-500 px-4 py-1 text-sm rounded-full text-white">
            20 % OFF
          </p>
        </div>

        {/* room rating */}
        <div className="flex items-center gap-1 py-1">
          <StarRating />
          <span className="text-sm text-gray-500">200+ Reviews</span>
        </div>

        {/* Room Address */}

        <div className="flex items-center gap-2 py-1">
          <img src={assets.locationIcon} alt="locationIcon" />
          <span className="text-sm text-gray-600">{room.hotel.address}</span>
        </div>

        {/* Room images */}

        <div className="my-5 flex flex-col lg:items-center lg:flex-row gap-5">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="roomImage"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          {/* other images */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="room Image"
                  className={`w-full rounded-xl shadow-lg ${
                    mainImage == image && "border-2 border-blue-500"
                  } object-cover cursor-pointer`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlights */}

        <div className="mt-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div>
              <h1 className="font-playfair text-3xl font-bold mb-2">
                Experience Luxruy like Never Before
              </h1>
              <div className="space-y-1">
                {room.amenities.map((ammenity, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>{ammenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="md:text-3xl text-xl font-bold">
                Rs {room.pricePerNight}/Night
              </h1>
            </div>
          </div>
        </div>

        {/* Check in Checkout form */}

        <form className="my-10 bg-white flex flex-col gap-5 md:flex-row md:gap-10 md:justify-between  shadow-lg rounded-md p-6">
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="CheckIn">
                Check In
              </label>
              <input
                type="date"
                className="border-2 border-gray-300 px-2 py-1 rounded-md"
                id="CheckIn"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="CheckOut">
                Check Out
              </label>
              <input
                type="date"
                className="border-2 border-gray-300 px-2 py-1 rounded-md"
                id="CheckOut"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="guests">
                Guests
              </label>
              <input
                type="number"
                placeholder="0"
                className="border-2 border-gray-300 px-2 py-1 rounded-md"
                id="guests"
              />
            </div>
          </div>

          <Button>Check Availability</Button>
        </form>

        {/* Common specfications */}

        <div className="my-10 space-y-2">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={spec.icon} />
              <div>
                <h1 className="font-semibold">{spec.title}</h1>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Room Description */}

        <div className="max-w-3xl border-y-2 py-5 border-gray-300">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            dolorem deleniti dolore delectus, dolorum modi architecto rerum est
            aliquid maiores sed ut, perspiciatis ipsa omnis suscipit earum
            provident neque quidem temporibus dolor nostrum esse id excepturi!
            Nulla minus suscipit veniam? Culpa molestias ea nostrum vel totam
            praesentium ex facilis maxime.
          </p>
        </div>

        {/* Hosted by */}

        <div className="my-10 flex items-start gap-5">
          <Avatar className="h-24 w-24">
            <AvatarImage  src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h2>Hosted by {room.hotel.owner.username}</h2>
            <div className="flex flex-wrap gap-2 items-center mb-2">
              <StarRating />
              <span>200+ Reviews</span>
            </div>

            <Button className="text-white bg-blue-500 mt-5">Contact Host</Button>
          </div>
        </div>
      </div>
    )
  );
};

export default RoomDetail;
