import React from 'react'
import Coffee from '../Pages/Coffee'
import { Outlet } from 'react-router-dom'

const CoffeeLayouts = () => {

  return (
    <>
    
        <Coffee />
        <Outlet />
    
    </>
  )
}

export default CoffeeLayouts