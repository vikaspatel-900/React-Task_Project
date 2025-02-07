import React from 'react'
import logo from '../assets/logo.webp'
import { Navdata } from '../contants/Navbar'
import { NavLink } from 'react-router-dom'
import '../App.css'


const Header = () => {
  return (
    <header className='header_section'>
       <div>
        <NavLink to={"/"}> <img src={logo} alt='logo'/></NavLink>
       </div>

       <nav>
          {
            Navdata.map((data)=>{
                return(
                    <div key={data.title}>
                        <NavLink style={{textDecoration:"none"}} to={data.href}>{data.title}</NavLink>
                    </div>
                )
            })
          }
       </nav>


       <div>
       
        <NavLink to={"/contact"}><button>Contact Us</button></NavLink>
       </div>


    </header>
  )
}

export default Header
