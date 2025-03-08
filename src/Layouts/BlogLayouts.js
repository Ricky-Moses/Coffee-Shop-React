import React from 'react'
import Blog from '../Pages/Blog'
import { Outlet } from 'react-router-dom'

const BlogLayouts = () => {
  return (
    <div>
        
        <Blog />
        <Outlet />

    </div>
  )
}

export default BlogLayouts