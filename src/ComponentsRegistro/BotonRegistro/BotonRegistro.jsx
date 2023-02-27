import React from 'react'
import './BotonRegistro.css'

export default function BotonRegistro() {
    const onSubmit = (e) =>  {
        e.preventDefault();
}
    return (
        <div className="texto">
            <div className="pText">
            <p className="pTexto"> Already have an account? <a class="aText" href="#"> Login</a></p>
            <p className="pTexto"> Go back to <a class="aText" href="#"> home page</a></p>
            </div>
        </div>
);


}
