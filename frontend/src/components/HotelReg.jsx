import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HotelReg = ({ isScrolled }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled ? "text-black" : "text-white"
          } transition-all`}
        >
          Register hotel
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[855px]  p-0">
        <div className="flex gap-4">
          <img
            className="w-1/2 hidden md:block object-cover h-auto"
            src={assets.regImage}
            alt="regImage"
          />
          <form className="space-y-4 w-1/2">
            <h1 className="font-bold text-2xl pt-16 text-center">
              Register your hotel
            </h1>
            <div className="w-full space-y-1 pr-2">
              <Label>Hotel Name</Label>
              <Input className="w-full" placeholder="Enter your hotel name" />
            </div>

            <div className="w-full space-y-1 pr-2">
              <Label>Phone</Label>
              <Input className="w-full" placeholder="Enter your Phone number" />
            </div>

            <div className="w-full space-y-1 pr-2">
              <Label>Address</Label>
              <Input className="w-full" placeholder="Enter your address" />
            </div>

            <div className="w-full space-y-1 pr-2">
              <Label>City</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Cities</SelectLabel>
                    <SelectItem value="pokhara">Pokhara</SelectItem>
                    <SelectItem value="kathmandu">Kathmandu</SelectItem>
                    <SelectItem value="chitwan">Chitwan</SelectItem>
                    <SelectItem value="hetauda">Hetauda</SelectItem>
                    <SelectItem value="syangja">Syangja</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit">Register</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HotelReg;
