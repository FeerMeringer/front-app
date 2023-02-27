import React from 'react'
import imagenH from '../Images/imgA.png'
import imagenJ from '../Images/image3.png'
import './SegundaSeccion.css'

export default function SegundaSeccion() {
  return (
    <div className="contenedorQ">
        <div className="contenedorX">
        <img  className="imgCont" src={imagenH} alt="descripción de la imagen" />
        <div className="contenedorImg">
        <img className="imgCont" src={imagenJ} alt="descripción de la imagen" /> 
    </div>
    <div class="contenedorText">
                    <div class="contenedorT">
                    <h2> My Hero Academy</h2>
                    <h5> Manga</h5>
                    <p> In a world in which most of the population is born with a Gift, a different extraordinary ability in each one, it didn't take long for both villains and heroes to appear ready to stop them.</p>
                </div>

        </div>
        </div>




    </div>

  )
}
