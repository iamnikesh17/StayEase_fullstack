import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import { useLocation } from "react-router-dom"
import AllRoutes from "./routes/AllRoutes"
import Footer from "./components/Footer"
import HotelReg from "./components/HotelReg"



function App() {
  const isOwnerPath=useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <AllRoutes/>
      {
        !isOwnerPath && <Footer/>
      }
    </div>
  )
}

export default App
