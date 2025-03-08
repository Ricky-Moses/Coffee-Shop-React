import React from 'react'
import blackCoffeeAmericano from '../Image-2/Black_Coffee_Americano.png'
import blackCoffeeDoppio from '../Image-2/Black_Coffee_Doppio.png'
import blackCoffeeEspresso from '../Image-2/Black_Coffee_Espresso.png'
import blackCoffeeLongBlack from '../Image-2/Black_Coffee_Long_Black.png'
import blackCoffeeLungo from '../Image-2/Black_Coffee_Lungo.png'
import blackCoffeeRistretto from '../Image-2/Black_Coffee_Ristretto.png'

const BlackCoffee = () => {

    const blackCoffeeItem = [
        {
            img: blackCoffeeAmericano, title: 'Black Coffee', description: 'Espresso + hot water.'
        },
        {
            img: blackCoffeeDoppio, title: 'Doppio Coffee', description: 'Double shot of espresso.'
        },
        {
            img: blackCoffeeEspresso, title: 'Espresso Coffee', description: 'Strong, Concentrated Coffee Shot.'
        },
        {
            img: blackCoffeeLongBlack, title: 'Long Black Coffee', description: 'Similar to Americano but with a stronger taste.'
        },
        {
            img: blackCoffeeLungo, title: 'Lungo Coffee', description: 'A longer pulled espresso with more water.'
        },
        {
            img: blackCoffeeRistretto, title: 'Ristretto Coffee', description: 'Shorter, more concentrated espresso.'
        },
    ]

  return (
    <div>

        <ul className="black-coffee coffee-category">

            {
                blackCoffeeItem.map((item)=>(
                    <li key={item.img}>
                        <img src={item.img} alt={`${item.title}.png`} />
                        <div className="">
                            <h3> {item.title} </h3>
                            <p> {item.description} </p>
                        </div>
                    </li>
                ))
            }

        </ul>

    </div>
  )
}

export default BlackCoffee