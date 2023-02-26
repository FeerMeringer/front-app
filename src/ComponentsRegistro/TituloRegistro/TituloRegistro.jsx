import React from 'react'
import './TituloRegistro.css'
import ImagenL from '../Images/Logo.png'

export default function TituloRegistro() {
  return (
    <div>
    <div className="fLogo">
        <div className="logoMover">
    <img className="imgLogo" src={ImagenL} alt="descripción de la imagen" />
            <h1 class="textLogo"> INGA </h1>
            </div>
        </div>
        <div className="fText">
          <div className="fText">
            <p> Welcome! </p>
            </div>
            <div className="pTextA">
            <p className="pTextoA"> Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
            </div>
            </div>
            </div>
            
  );
}
