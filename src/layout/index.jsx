import { Outlet } from "react-router"
import Footer from "./footer"
import Navbar from "./navbar"

function Layout() {
  return (
    <>
      <Navbar/> 
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
