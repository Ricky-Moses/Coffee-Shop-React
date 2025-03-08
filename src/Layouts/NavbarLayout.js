import React from 'react'
import Navbar from "../Navigation/Navbar";
import { Outlet } from 'react-router-dom'


const NavbarLayout = () => {
  return (
    <>
    
        <Navbar />
        <Outlet />
    
    </>
  )
}

export default NavbarLayout