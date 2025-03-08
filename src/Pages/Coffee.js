import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsLayoutTextSidebar } from "react-icons/bs";

const Coffee = () => {

  const navigateCoffeeItem = useNavigate()

  const [ activeList, setActiveList ] = useState('')
  const [ isHeight, setIsHeight ] = useState('0')

  const navigateCoffeeList = (listPage)=>{
    setActiveList(listPage);
    navigateCoffeeItem(listPage)
    setIsHeight('0')
  }

  const handleHeight = ()=>{
    setIsHeight( (prevHeight) => (prevHeight === '0' ? '70vh' : '0' ) )
  }


  return (
    <div className='coffee-background'>
      <div className="coffee-head-title">
        <h1 id='coffeeTitle' style={{fontVariant: 'small-caps'}}>Coffee</h1>
        <ul style={{ height: isHeight  }}>
          {[
            { key: '', label: 'Black Coffee' },
            { key: 'ice_coffee', label: 'Ice Coffee' },
            { key: 'milk_coffee', label: 'Milk Coffee' },
            { key: 'unique_coffee', label: 'Unique Coffee' },
            { key: 'flavoured_coffee', label: 'Flavoured Coffee' },
          ].map((item)=>(
            <li
              key={item.key}
              className={ activeList === item.key ? 'active-coffee-list' : '' }
              onClick={ ()=> navigateCoffeeList(item.key) }
            >
              {item.label}
            </li>
          ))}
        </ul>
        <BsLayoutTextSidebar className='coffee-menu' onClick={handleHeight}/>
      </div>
      <hr />
    </div>
  )
}

export default Coffee