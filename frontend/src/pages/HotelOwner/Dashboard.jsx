import { assets, dashboardDummyData } from "@/assets/assets";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="font-medium text-4xl">Dashboard</h1>
        <p className="max-w-3xl text-gray-600 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          similique odio ipsa aliquam temporibus. Fuga, qui vero? Nam, adipisci
          commodi!
        </p>
      </div>

      <div className="my-4 flex flex-col md:flex-row gap-4">
        <div className="flex gap-4 px-4 py-3 bg-blue-300/10 border border-blue-300 shadow-lg rounded-md">
          <img src={assets.totalBookingIcon} alt="booking" />
          <div className="spacc-y-2">
            <p className="text-blue-500 font-semibold text-xl md:text-xl">
              Total Booking
            </p>
            <h2 className="font-semibold text-gray-600">20</h2>
          </div>
        </div>

        <div className="flex gap-4 px-4 py-3 bg-blue-300/10 border border-blue-300 shadow-lg rounded-md">
          <img src={assets.totalBookingIcon} alt="booking" />
          <div className="spacc-y-2">
            <p className="text-blue-500 font-semibold text-xl md:text-xl">
              Total Revenue
            </p>
            <h2 className="font-semibold text-gray-600">Rs 10,000</h2>
          </div>
        </div>
      </div>

      {/* Recent bookings */}
    
        <div>
          <h2 className="font-semibold text-2xl mt-5">Recent Bookings</h2>
        </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User Name</TableHead>
            <TableHead>Room Type</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dashboardDummyData.bookings.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.user.username}</TableCell>
              <TableCell>{item.room.roomType}</TableCell>
              <TableCell>Rs {item.totalPrice}</TableCell>
              <TableCell>
                {item.isPaid ? <span className="bg-green-600 px-4 py-1 rounded-full text-white text-xs">Paid</span> : <span className="bg-red-600 px-4 py-1 rounded-full text-white text-xs">Unpaid</span>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
