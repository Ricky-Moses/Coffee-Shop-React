import React from 'react'
import milkBasedCafeAuLait from '../Image-2/Milk_Based_Cafe_Au_Lait.png'
import milkBasedCappuccino from '../Image-2/Milk_Based_Cappuccino.png'
import milkBasedFlatWhite from '../Image-2/Milk_Based_Flat_White.png'
import milkBasedLatte from '../Image-2/Milk_Based_Latte.png'
import milkBasedMacchiato from '../Image-2/Milk_Based_Macchiato.png'
import milkBasedMocha from '../Image-2/Milk_Based_Mocha.png'

const MilkCoffee = () => {

    const iceCoffeeItem = [
            {
                img: milkBasedCafeAuLait, title: 'Café au Lait', description: 'Coffee + equal parts steamed milk.'
            },
            {
                img: milkBasedCappuccino, title: 'Cappuccino', description: 'Espresso + steamed milk + milk foam.'
            },
            {
                img: milkBasedFlatWhite, title: 'Flat White', description: 'Similar to latte, but with microfoam for a smoother texture.'
            },
            {
                img: milkBasedLatte, title: 'Latte', description: 'Espresso + more steamed milk, less foam.'
            },
            {
                img: milkBasedMacchiato, title: 'Macchiato', description: 'Espresso "Stained" with a little milk.'
            },
            {
                img: milkBasedMocha, title: 'Mocha', description: 'Espresso + chocolate + steamed milk.'
            }
    ]

  return (
    <div>
        
        <ul className='milk-coffee coffee-category'>
            {
                iceCoffeeItem.map((item)=>(
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

export default MilkCoffee