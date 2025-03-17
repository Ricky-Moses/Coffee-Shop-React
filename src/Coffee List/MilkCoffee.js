import React from 'react'
import milkCoffeeData from '../Data Json/Coffee.json'

const MilkCoffee = () => {

    console.log(milkCoffeeData.milk);

  return (
    <div>
        
        <ul className='milk-coffee coffee-category'>
            {
                milkCoffeeData.milk.map((milkItem)=>(
                    <li key={milkItem.image}>
                        <img src={`${process.env.PUBLIC_URL}${milkItem.image}`} alt={`${milkItem.title}.png`} />
                        <div className="">
                            <h3> {milkItem.title} </h3>
                            <p> {milkItem.description} </p>
                        </div>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default MilkCoffee