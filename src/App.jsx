import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Contenedor from '../src/components/Contenedor/Contenedor'
import SegundaSeccion from '../src/components/SegundaSeccion/SegundaSeccion'



function App() {
return (
    <div className="contenedorPadre">
    <div className='navbar-box'>
    <NavBar/>
    </div>
    <div clasName='cont'>
    <Contenedor/>
    </div>
    <div className="move">
    </div>
    <div className="contenedorQ">
        <SegundaSeccion/>
    </div>
    </div>


);
}

export default App;
