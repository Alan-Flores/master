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
      <h1 className="mt-5 mb-4">Terminal de punto de Ventas</h1>
      <span>Consof Ingenieria</span>
      <div>
        <a href='https://consof.net'>
          <button 
            type='button' 
            className='btn btn-primary btn-lg mt-5' 
            onclick="window.location='https://consof.net'"
            role='link'>

            Ir al TPV

          </button>
          </a>
      </div>
    </div>
  )
}

export default App