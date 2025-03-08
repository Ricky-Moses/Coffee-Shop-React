import React from 'react'
import sweetFlavoredCubanCoffee from '../Image-2/Sweet_Flavored_Cuban_Coffee.png'
import sweetFlavoredIrishCoffee from '../Image-2/Sweet_Flavored_Irish_Coffee.png'
import sweetFlavoredMexicanCoffee from '../Image-2/Sweet_Flavored_Mexican_Coffee.png'
import sweetFlavoredTurkistCoffee from '../Image-2/Sweet_Flavored_Turkist_Coffee.png'
import sweetFlavoredVietnamseCoffee from '../Image-2/Sweet_Flavored_Vietnamse_Coffee.png'

const FlavouredCoffee = () => {

    const iceCoffeeItem = [
            {
                img: sweetFlavoredCubanCoffee, title: 'Cuban Coffee', description: 'Espresso mixed with sugar while brewing.'
            },
            {
                img: sweetFlavoredIrishCoffee, title: 'Irish Coffee', description: 'Coffee + Irish coffee + sugar + cream.'
            },
            {
                img: sweetFlavoredMexicanCoffee, title: 'Mexican Coffee', description: 'Brewed with cinnamon and brown sugar.'
            },
            {
                img: sweetFlavoredTurkistCoffee, title: 'Turkish Romano', description: 'Finely ground coffee brewed unfiltered in a pot.'
            },
            {
                img: sweetFlavoredVietnamseCoffee, title: 'Vietnamese Romano', description: 'Strong coffee + sweet condensed milk.'
            }
        ]

  return (
    <div>
        
        <ul className="flavoured-coffee coffee-category">

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

export default FlavouredCoffee