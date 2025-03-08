import React from 'react'
import ArtCoffee from '../Blog Image/art_coffee.png'

const ArtOfBrewing = () => {
  return (
    <div className='blog-content'>
        <main className='art-coffee-details coffee-blog-list'>
            <img src={ ArtCoffee } alt="" />
            <div className="blog-coffee-details">
                <h1>The Art Of Brewing: How To Make The Perfect Cup Of Coffee At Home.</h1>
                <p>Many coffee lovers rely on their local cafés for a great cup of coffee, but did you know you can brew the perfect cup at home? Whether you love strong espresso or smooth pour-over, mastering coffee brewing is easier than you think.</p>
                <ul>
                    <li>Choosing the Right Beans – Understanding roast levels and origins</li>
                    <li>Brewing Methods – Espresso, French press, AeroPress, and pour-over</li>
                    <li>Water Temperature & Ratio – The science behind extraction</li>
                    <li>Grinding Coffee Beans – Why grind size matters</li>
                    <li>Tips for Enhancing Flavor – Using fresh beans, filtered water, and precise timing</li>
                </ul>
                <b>Conclusion: </b>
                <div> Each country adds its unique touch to coffee, proving that it’s more than just a beverage—it’s a way of life.</div>
            </div>
        </main>
    </div>
  )
}

export default ArtOfBrewing