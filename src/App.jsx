import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import NavMenu from './components/NavMenu'


const App = () => {
  return (
    <div>
       <NavMenu/>
       <Header/>
         <Outlet/>
       <Footer/>
    </div>
  )
}

export default App
