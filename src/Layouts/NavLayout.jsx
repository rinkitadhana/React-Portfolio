import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const NavLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default NavLayout
