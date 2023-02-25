import './App.css';
import NavBar from './components/NavBar';
import Contenedor from './components/Contenedor';
import SegundaSeccion from './components/SegundaSeccion'


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
