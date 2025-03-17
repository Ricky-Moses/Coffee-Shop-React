import React from 'react'
import flavorCoffeeItem from '../Data Json/Coffee.json'

const FlavouredCoffee = () => {

    console.log(flavorCoffeeItem.flavour);

  return (
    <div>
        
        <ul className="flavoured-coffee coffee-category">

            {
                flavorCoffeeItem.flavour.map((flavourItem)=>(
                    <li key={flavourItem.image}>
                        <img src={`${process.env.PUBLIC_URL}${flavourItem.image}`} alt={`${flavourItem.title}.png`} />
                        <div className="">
                            <h3> {flavourItem.title} </h3>
                            <p> {flavourItem.description} </p>
                        </div>
                    </li>
                ))
            }

        </ul>

    </div>
  )
}

export default FlavouredCoffee