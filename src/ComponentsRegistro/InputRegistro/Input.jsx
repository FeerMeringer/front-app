import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import './Input.css'
import ImagenN from '../Images/profile.png'
import ImagenE from '../Images/arroba.png'
import ImagenP from '../Images/lock1.png'
import ImagenG from '../Images/Google.png'

export default function Input() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const conPassword = useRef()

    async function handleSubmit(e) {
        e.preventDefault();
        let data = {
            [name.current.name]: name.current.value,
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value
        }
        console.log(data)
        const url = 'http://localhost:8080/users'
        try {
            if (data.password == conPassword.current.value) {
                await axios.post(url, data)
            }
        } catch (error) {
            console.log("Ocurrió un error");
        }
    }
    return (
        <div className="mover">
            <div className="formA">
                <form className="formA" onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>Name</legend>
                        <label htmlFor="name">
                            <input ref={name} type="text" required name="name" />
                        </label>
                        <img className="imgN" src={ImagenN} alt="descripción de la imagen" />
                    </fieldset>

                    <fieldset>
                        <legend>Email</legend>
                        <label htmlFor="email">
                            <input ref={email} type="text" required name="email" />
                        </label>
                        <img className="imgN" src={ImagenE} alt="descripción de la imagen" />
                    </fieldset>

                    <fieldset>
                        <legend>Password</legend>
                        <label htmlFor="Password">
                            <input ref={password} type="password" required name="password" />
                        </label>
                        <img className="imgN" src={ImagenP} alt="descripción de la imagen" />
                    </fieldset>

                    <fieldset>
                        <legend>Confirm Password</legend>
                        <label htmlFor="confirmPassword">
                            <input ref={conPassword} type="password" name="confirmPassword" required />
                        </label>
                        <img className="imgN" src={ImagenP} alt="descripción de la imagen" />
                    </fieldset>

                    <div className="check">
                        <input className="checkA" type="checkbox" name="mi-checkbox" value="1" />
                        <label>Send notification to my email</label>
                    </div>
                    <div className="botones">
                        <label htmlFor="">
                            <input className="enviarLo" type="submit" value="Sign Up" />
                        </label>


                        <div className="imgGoogle">
                            <img className="imgN" src={ImagenG} alt="descripción de la imagen" />
                            <button type="submit" value="Sign up with Google" className="boton2">
                            Sign up with Google
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

