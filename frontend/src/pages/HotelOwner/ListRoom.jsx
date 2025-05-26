import { assets, dashboardDummyData, roomsDummyData } from "@/assets/assets";
import React from "react";
import { Switch } from "@/components/ui/switch"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const ListRoom = () => {
  return (
    <div>
        <div className='space-y-2'>
            <h1 className='text-3xl font-semibold'>Room Listings</h1>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio vitae a expedita doloremque quisquam.</p>
        </div>

        <div className='mt-4'>
            <h1 className="text-gray-700 font-medium mb-3">All Rooms</h1>
             <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Facility</TableHead>
                        <TableHead>Price/night</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roomsDummyData.map((room, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{room.roomType}</TableCell>
                          <TableCell>{room.amenities.join(", ")}</TableCell>
                          <TableCell>Rs {room.pricePerNight}</TableCell>
                          <TableCell>
                            <Switch  />

                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
        </div>
    </div>
  )
}

export default ListRoom