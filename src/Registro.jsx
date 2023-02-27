import './Registro.css'
import TituloRegistro from './ComponentsRegistro/TituloRegistro/TituloRegistro'
import InputRegistro from './ComponentsRegistro/InputRegistro/Input' ;
import BotonRegistro from './ComponentsRegistro/BotonRegistro/BotonRegistro';
import ImagenDiv from './ComponentsRegistro/Images/Rectangle.png';

function Registro() {
  return (
    <section className="registroA">
    <div className="registro">
      <div className="fLogo">
        <TituloRegistro/>
      </div>
      <InputRegistro/>
    <div className="texto">
    <BotonRegistro/>
    </div>
      </div>
      <div>
        <img className="i" src={ImagenDiv} alt="descripción de la imagen" />
        </div>
      </section>
        
  
  );
}

export default Registro;
