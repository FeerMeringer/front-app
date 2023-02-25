import React from 'react'
import ImagenA from '../Images/Menu.png'
import ImagenB from '../Images/Logo.png'
import '../components/NavBar.css'



export default function navBar() {
    // let ImagenA = <img className="menu" src={imagen} alt="menu"/>
    // let ImagenB = <img className="logo" src={imagen1} alt="logo"/>
  return (
    <div className='navbar-box'>
        <img className="imgB" src={ImagenA} alt="descripción de la imagen" />
        <img className="imgB" src={ImagenB} alt="descripción de la imagen" />
        
    </div>
  )
}
