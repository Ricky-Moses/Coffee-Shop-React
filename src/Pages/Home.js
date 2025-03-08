import React, { useEffect, useState } from 'react'
import './Pages.css'
import { useNavigate } from 'react-router-dom'
import CoffeeBanner from '../Image/Coffee_Banner.png'
import CoffeeCup from '../Image/Coffee_Cup.png'

const Home = () => {

  const navigatePages = useNavigate()

  const [ h3Size, setH3Size ] = useState()

  useEffect(()=>{
    
    const handleH3Size = ()=>{
      setH3Size( window.innerWidth <= 768 ? '2em' : '' )
    }

    window.addEventListener('resize', handleH3Size);

    return ()=> { window.removeEventListener('resize', handleH3Size) }

  }, [])

  return (
    <div className='home-background'>
      <img className='coffee-banner' src={CoffeeBanner} alt="Coffee_Banner.jpg" />
      <main className="main-page-content">
        <img src={CoffeeCup} alt="Coffee_cup.png" />
        <div className="main-content">
          <h1>Coffee</h1>
          <h3 style={{fontSize: h3Size}}>Tasty Of DozeCafe</h3>
          <p>More or Less Normal Distribution Of Letter, As Opposed To Using.</p>
          <button onClick={()=> {navigatePages('about')}}>About Us</button>
          <button onClick={()=> {navigatePages('contact')}}>Call Now</button>
        </div>
      </main>
    </div>
  )
}

export default Home