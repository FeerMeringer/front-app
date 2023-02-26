import React from 'react'
import './BotonRegistro.css'
import ImagenG from '../Images/Google.png'

export default function BotonRegistro() {
  return (
    <div>
    <div className="enviarA">
        <button type="submit" value="Sign Up" id="enviar">
            Sign Up
            </button>
        <div className="imgGoogle">
        <button type="submit"  value="Sign up with Google" className="boton2">
        <img className="imgG" src={ImagenG} alt="descripción de la imagen" />
            Sign up with Google
            </button>
    </div>
    </div>
    
    <div className="texto">
        <div className="pText">
        <p clasNames="pTexto"> Already have an account? <a class="aText" href="#"> Login</a></p>
        <p className="pTexto"> Go back to <a class="aText" href="#"> home page</a></p>
        </div>
    </div>
    </div>

 );
}
