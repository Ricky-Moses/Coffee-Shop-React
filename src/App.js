import React from 'react'
import './App.css'
import NavbarLayout from './Layouts/NavbarLayout'
import HomeLayouts from './Layouts/HomeLayouts'
import Home from './Pages/Home'
import About from './Pages/About'
import CoffeeLayouts from './Layouts/CoffeeLayouts'
import Coffee from './Pages/Coffee'
import BlackCoffee from './Coffee List/BlackCoffee'
import IceCoffee from './Coffee List/IceCoffee'
import MilkCoffee from './Coffee List/MilkCoffee'
import UniqueCoffee from './Coffee List/UniqueCoffee'
import FlavouredCoffee from './Coffee List/FlavouredCoffee'
import BlogLayouts from './Layouts/BlogLayouts'
import ArtOfBrewing from './Blog List/ArtOfBrewing'
import ExploringWorldCoffee from './Blog List/ExploringWorldCoffee'
import HealthBenefits from './Blog List/HealthBenefits'
import RiseOfCoffee from './Blog List/RiseOfCoffee'
import Contact from './Pages/Contact'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const App = () => {

  const coffeeBanner = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <NavbarLayout /> }>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='coffee' element={ <CoffeeLayouts /> } >
            <Route index element={ <BlackCoffee /> } />
            <Route path='ice_coffee' element={ <IceCoffee /> } />
            <Route path='milk_coffee' element={ <MilkCoffee /> } />
            <Route path='unique_coffee' element={ <UniqueCoffee /> } />
            <Route path='flavoured_coffee' element={ <FlavouredCoffee /> } />
          </Route>
          <Route path='blog' element={ <BlogLayouts /> } >
            <Route index element={ <ArtOfBrewing /> } />
            <Route path='exploring_world_coffee' element={ <ExploringWorldCoffee /> } />
            <Route path='health_benefits' element={ <HealthBenefits /> } />
            <Route path='rise_of_coffee' element={ <RiseOfCoffee /> } />
          </Route>
          <Route path='contact' element={ <Contact /> } />

          <Route path='home' element={ <HomeLayouts /> }>
            <Route path='about' element={ <About /> } />
            <Route path='coffee' element={ <Coffee /> } />
          </Route>

      </Route>

      
    )
  )


  return ( <RouterProvider router={ coffeeBanner } /> )
}

export default App