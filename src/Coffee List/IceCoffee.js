import React from 'react'
import icedCoffeeAufogato from '../Image-2/Iced_Coffee_Aufogato.png'
import icedCoffeeColdBrew from '../Image-2/Iced_Coffee_Cold_Brew.png'
import icedCoffeeIceCoffee from '../Image-2/Iced_Coffee_Ice_Coffee.png'
import icedCoffeeIcedLatte from '../Image-2/Iced_Coffee_Iced_Latte.png'
import icedCoffeeNitroCoffee from '../Image-2/Iced_Coffee_Nitro_Coffee.png'

const IceCoffee = () => {


    const iceCoffeeItem = [
            {
                img: icedCoffeeAufogato, title: 'Affogato', description: 'Espresso poured over vanilla ice cream.'
            },
            {
                img: icedCoffeeColdBrew, title: 'Cold Brew', description: 'Coffee steeped in cold water for 12+ hours.'
            },
            {
                img: icedCoffeeIceCoffee, title: 'Iced Coffee', description: 'Regular brewed coffee, chilled & served with ice.'
            },
            {
                img: icedCoffeeIcedLatte, title: 'Ice Latte', description: 'Espresso + Cold milk + Ice.'
            },
            {
                img: icedCoffeeNitroCoffee, title: 'Nitro Coffee', description: 'Cold brew infused with nitrogen for a creamy texture.'
            }
        ]

  return (
    <div>
        
        <ul className='ice-coffee coffee-category'>

            {
                iceCoffeeItem.map((item)=>(
                    <li key={item.img}>
                        <img src={item.img} alt={`${item.title}`} />
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

export default IceCoffee