import React from 'react'
import RiseCoffee from '../Blog Image/rise_coffee.png'

const RiseOfCoffee = () => {
  return (
    <div className='blog-content'>
        <main className='art-coffee-details coffee-blog-list'>
            <img src={ RiseCoffee } alt="" />
            <div className="blog-coffee-details">
                <h1>The Rise of Specialty Coffee: What Makes It Different from Regular Coffee?</h1>
                <p>Specialty coffee is becoming more popular, but what sets it apart from regular coffee? If you love high-quality coffee, it’s time to explore the world of specialty brews.</p>
                <ul>
                    <li>What is Specialty Coffee? – High-quality beans with unique flavor profiles</li>
                    <li>Single-Origin vs. Blends – Understanding the differences</li>
                    <li>Third Wave Coffee Movement – A focus on craftsmanship and sustainability</li>
                    <li>Direct Trade & Ethical Sourcing – Why it matters</li>
                    <li>How to Identify Specialty Coffee – Labels, tasting notes, and certifications</li>
                </ul>
                <b>Conclusion: </b>
                <div>Specialty coffee is all about quality, sustainability, and an enhanced coffee experience—perfect for true coffee enthusiasts!</div>
            </div>
        </main>
    </div>
  )
}

export default RiseOfCoffee