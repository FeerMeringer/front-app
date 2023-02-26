import React from 'react'
import './Input.css'
import ImagenN from '../Images/profile.png'
import ImagenE from  '../Images/arroba.png'
import ImagenP from '../Images/lock1.png'



export default function Input() {
return (
    <div className="mover">
    <div className="formA">
        <form>
    <fieldset>
                <legend>Name</legend>
                <label htmlFor="nombre">
                <input type="text" id="Name" required/>
            </label>
            <img className="imgN" src={ImagenN} alt="descripción de la imagen" />
            </fieldset>

            <fieldset>
            <legend>Email</legend>
            <label htmlFor="nombre">
            <input type="text" id="Email" required/>
        </label>
        <img className="imgN" src={ImagenE} alt="descripción de la imagen" />
        </fieldset>
        <fieldset>
                <legend>Password</legend>
                <label htmlFor="nombre">
                <input type="password" id="Password" required/>
            </label>
            <img className="imgN" src={ImagenP} alt="descripción de la imagen" />
            </fieldset>
            <fieldset>
                <legend>Confirm Password</legend>
                <label htmlFor="nombre">
                <input type="password" id="ConfirmPassword" required/>
            </label>
            <img className="imgN" src={ImagenP} alt="descripción de la imagen" />
            </fieldset>
            </form>
            </div>

            <div className="check">
                <input className="checkA"  type="checkbox" name="mi-checkbox" value="1"/> 
                <label> Send notification to my email</label>
            </div>
        </div>
        
        
);
}
