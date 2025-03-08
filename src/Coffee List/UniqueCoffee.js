import React from 'react'
import specialtyUniqueBulletproofCoffee from '../Image-2/Specialty_Unique_Bulletproof_Coffee.png'
import specialtyUniqueCascara from '../Image-2/Specialty_Unique_Cascara.png'
import specialtyUniqueChicoryCoffee from '../Image-2/Specialty_Unique_Chicory_Coffee.png'
import specialtyUniqueEspressoRomano from '../Image-2/Specialty_Unique_Espresso_Romano.png'

const UniqueCoffee = () => {

    const iceCoffeeItem = [
            {
                img: specialtyUniqueBulletproofCoffee, title: 'Bulletproof Coffee', description: 'Coffee blended with butter & MCT oil.'
            },
            {
                img: specialtyUniqueCascara, title: 'Cascara', description: 'Made from dried coffee cherry husks.'
            },
            {
                img: specialtyUniqueChicoryCoffee, title: 'Chicory Coffee', description: 'Coffee mixed with roasted chicory root.'
            },
            {
                img: specialtyUniqueEspressoRomano, title: 'Espresso Romano', description: 'Espresso with a slice of lemon.'
            }
        ]

  return (
    <div>

        <ul className="special-coffee coffee-category">

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

export default UniqueCoffee