import React from 'react'
import specialCoffeeData from '../Data Json/Coffee.json'

const UniqueCoffee = () => {

    console.log(specialCoffeeData.special);

  return (
    <div>

        <ul className="special-coffee coffee-category">

            {
                specialCoffeeData.special.map((specialItem)=>(
                    <li key={specialItem.image}>
                        <img src={`${process.env.PUBLIC_URL}${specialItem.image}`} alt={`${specialItem.title}.png`} />
                        <div className="">
                            <h3> {specialItem.title} </h3>
                            <p> {specialItem.description} </p>
                        </div>
                    </li>
                ))
            }

        </ul>

    </div>
  )
}

export default UniqueCoffee