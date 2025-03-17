import React from 'react'
import iceCoffeeItem from '../Data Json/Coffee.json'

const IceCoffee = () => {
    console.log(iceCoffeeItem.ice);

  return (
    <div>
        
        <ul className='ice-coffee coffee-category'>

            {
                iceCoffeeItem.ice.map((iceItem)=>(
                    <li key={iceItem.image}>
                        <img src={`${process.env.PUBLIC_URL}${iceItem.image}`} alt={`${iceItem.title}`} />
                        <div className="">
                            <h3> {iceItem.title} </h3>
                            <p> {iceItem.description} </p>
                        </div>
                    </li>
                ))
            }

        </ul>

    </div>
  )
}

export default IceCoffee