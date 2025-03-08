import React from 'react'
import ExploreCoffee from '../Blog Image/explore_coffee.png'

const ExploringWorldCoffee = () => {
  return (
    <div className='blog-content'>
        <main className='explore-coffee-details coffee-blog-list'>
            <img src={ ExploreCoffee } alt="" />
            <div className="blog-coffee-details">
                <h1>Exploring The World Of Coffee: Different Coffee Culture Around The Global.</h1>
                <p>Coffee is more than just a drink—it’s a cultural experience. Every country has its unique way of preparing and enjoying coffee. Let’s explore some fascinating coffee traditions from around the world.</p>
                <ul>
                    <li>Italy – The birthplace of espresso culture</li>
                    <li>Turkey – The traditional Turkish coffee ritual</li>
                    <li>Ethiopia – The Ethiopian coffee ceremony</li>
                    <li>Japan – Siphon coffee and precision brewing</li>
                    <li>Cuba – Sweet and strong Cuban coffee</li>
                </ul>
                <b>Conclusion: </b>
                <div> Each country adds its unique touch to coffee, proving that it’s more than just a beverage—it’s a way of life.</div>
            </div>
        </main>
    </div>
  )
}

export default ExploringWorldCoffee