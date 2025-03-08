import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HiBarsArrowDown } from "react-icons/hi2";

const Navbar = () => {

    const [ navHeight, setNavHeight ] = useState('')
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isTab, setIsTab ] = useState( window.innerWidth <= 992 )


    useEffect(()=>{

        const handleNavHeight = ()=>{
            setIsTab(window.innerWidth <= 992);
                if(window.innerWidth >= 992){
                    setNavHeight('')
                }
            }

        window.addEventListener('resize' , handleNavHeight);

        return ()=> {window.removeEventListener('resize', handleNavHeight)}

    }, [])

    const handleHeight = ()=>{
        if(isTab){
            setNavHeight((currentHeight) => (currentHeight === '0' ? '10vh' : '0'))
        }
        setIsOpen(!isOpen)
    }

  return (
    <>
    
        <header className='menu-link__head'>
            <div className="head-title">
                <h1>CofFee Bar</h1>
                { isTab && <HiBarsArrowDown style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'all .6s ease-in-out' }} className='menu-bar' onClick={handleHeight}/>}
            </div>
            <nav style={{height: navHeight, transition: 'all .5s ease'}}>
                <ul>
                    <li><NavLink to={'/'} className={({ isActive }) => (isActive ? "activeLink" : "")}>Home</NavLink></li>
                    <li><NavLink to={'about'} className={({ isActive }) => (isActive ? "activeLink" : "")}>About</NavLink></li>
                    <li><NavLink to={'coffee'} className={({ isActive }) => (isActive ? "activeLink" : "")}>Coffee</NavLink></li>
                    <li><NavLink to={'blog'} className={({ isActive }) => (isActive ? "activeLink" : "")}>Blog</NavLink></li>
                    <li><NavLink to={'contact'} className={({ isActive }) => (isActive ? "activeLink" : "")}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    
    </>
  )
}

export default Navbar