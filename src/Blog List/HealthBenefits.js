import React from 'react'
import HealthCoffee from '../Blog Image/health_coffee.png'

const HealthBenefits = () => {
  return (
    <div className='blog-content'>
        <main className='health-coffee-details coffee-blog-list'>
            <img src={ HealthCoffee } alt="" />
            <div className="blog-coffee-details">
                <h1>Health Benefits Of Coffee, Is Your Daily Cup Good For You?</h1>
                <p>Many people start their day with a cup of coffee, but is it actually good for your health? Research suggests that coffee offers several benefits beyond just keeping you awake.</p>
                <ul>
                    <li>Boosts Energy & Mental Alertness – Thanks to caffeine</li>
                    <li>Rich in Antioxidants – Helps fight inflammation</li>
                    <li>May Lower Risk of Diseases – Reduces chances of diabetes and heart disease</li>
                    <li>Enhances Physical Performance – A great pre-workout drink</li>
                    <li>Possible Downsides – Caffeine sensitivity and sleep disruption</li>
                </ul>
                <b>Conclusion: </b>
                <div>Moderate coffee consumption can be part of a healthy lifestyle—just be mindful of your intake!</div>
            </div>
        </main>
    </div>
  )
}

export default HealthBenefits