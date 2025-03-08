import React, { useEffect,  useState } from 'react'
import CoffeeBeans from '../Image/Coffee_Beans.png'
import IceCoffee from '../Image/Ice-Coffee.png'
import LattoCaffeno from '../Image/Latto_Caffeno.png'
import MilkShake from '../Image/Milkshake_coffee.png'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {

  const imgContainer = [CoffeeBeans, IceCoffee, LattoCaffeno, MilkShake];

  const detailsAboutImage = [
    {
      title: 'Coffee Beans ☕ 🌿',
      place: 'Tamil Nadu',
      description: `Tamil Nadu is one of India’s leading coffee-producing states, known for its high-quality Arabica and Robusta beans grown in the Western Ghats. The state's coffee is primarily cultivated in the Nilgiris, Yercaud, and Kodaikanal regions, where the climate and soil provide ideal conditions for coffee farming.`,
    },
    {
      title: 'Ice Coffee ☕ ❄️',
      place: 'Tamil Nadu',
      description: `Ice coffee is a popular and refreshing drink in Tamil Nadu, especially during the hot summer months. Unlike traditional South Indian filter coffee, which is served hot, ice coffee offers a chilled, sweet, and creamy alternative loved by many.`,
    },
    {
      title: 'Latte & Cappuccino ☕ 🥛 & ❤️',
      place: 'Tamil Nadu',
      description: `Tamil Nadu has a rich coffee culture, with traditional South Indian filter coffee being the most popular. However, global coffee trends like latte and cappuccino have become widely available in cafés across cities like Chennai, Coimbatore, and Madurai.`,
    },
    {
      title: 'Milk Shake ☕ 🥛',
      place: 'Tamil Nadu',
      description: `Milkshakes are super popular in Tamil Nadu, especially in hot cities like Chennai, Madurai, and Coimbatore, where people love chilled beverages. From classic fruit shakes to thick, creamy chocolate shakes, milkshakes are a favorite among all age groups.`,
    },
  ];


  const [ index, setIndex ] = useState(0)

  const handleNext = ()=>{
    setIndex((currentIndex) => (currentIndex + 1) % imgContainer.length)
  }

  const handlePrev = ()=>{
    setIndex((currentIndex) => (currentIndex - 1 + imgContainer.length) % imgContainer.length)
  }

  useEffect(()=>{
    let imgInterval = setInterval(()=>{
      let randomImage = Math.floor(Math.random() * imgContainer.length);
      setIndex(randomImage)
    }, 3000)

    return ()=> clearInterval(imgInterval)
  });

  return (
    <div className='about-background'>
      <div className='img-container'>
        <img src={imgContainer[index]} alt="" className="about-img-container" />
        <FaArrowAltCircleLeft className="img-button left-btn" onClick={handlePrev} />
      </div>
      <div className="about-detail-container">
        <div className="details-about-img">
          <h1> {detailsAboutImage[index].title} </h1>
          <h2> {detailsAboutImage[index].place} </h2>
          <p> {detailsAboutImage[index].description} </p>
        </div>
        <FaArrowAltCircleRight className="img-button right-btn" onClick={handleNext} />
      </div>
    </div>
  )
}

export default About