import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArtOfBrewing from '../Blog Image/Blog_One.jpg'
import ExploringWorld from '../Blog Image/Blog_Two.jpg'
import HealthBenefits from '../Blog Image/Blog_Three.jpg'
import RiseOfCoffee from '../Blog Image/Blog_four.jpg'

const Blog = () => {

  const navigateBlog = useNavigate()

  const [ activeBlog, setActiveBlog ] = useState('')

  const handleNavigateBlog = (linkPage)=>{
    setActiveBlog(linkPage)
    navigateBlog(linkPage)
  }


  return (
    <div className='blog-background'>
      
      <ul className='blog-list'>

        {
          [
            { key: '', img: ArtOfBrewing, title: 'The Art Of Brewing' },
            { key: 'exploring_world_coffee', img: ExploringWorld, title: 'Exploring The World Of Coffee' },
            { key: 'health_benefits', img: HealthBenefits, title: 'Health Benefits Of Coffee' },
            { key: 'rise_of_coffee', img: RiseOfCoffee, title: 'The Rise Of Coffee' },
          ].map((item)=>(
            <li
              key={item.key}
              className={ activeBlog === item.key ? 'active-blog-li' : '' }
              onClick={()=> handleNavigateBlog(item.key)}
            >
              <img src={item.img} alt="" />
              <p> {item.title} </p>
            </li>
          ))
        }

      </ul>


    </div>
  )
}

export default Blog