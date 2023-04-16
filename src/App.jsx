import consofLogo from './assets/img/consofCS.svg';
import circuloCS from './assets/img/circuloCS.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <a></a>
        <a href="https://www.consofchile.cl/" target="_blank">
          <img src={consofLogo} className="logo" alt="Consof logo" />
          <img src={circuloCS} className="circle" alt="Consof logo" />         
        </a>
      </div>
      <h1 className="mt-5 mb-4">Matriz de Proyectos</h1>
      <span>Plantilla de proyectos</span>
    </div>
  )
}

export default App