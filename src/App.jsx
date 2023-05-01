import consofLogo from './assets/img/consofCS.svg';
import circuloCS from './assets/img/circuloCS.svg';
import { ButtonLocal } from './assets/img/ButtonLocal';
import './App.css';

function App() {

  return (
    <div className="App">
      <ButtonLocal />
      <div>
        <a></a>
        <h2 className="mb-4">Pagina en construcción</h2>
        <a href="https://www.consofchile.cl/" target="_blank">
          <img src={consofLogo} className="logo" alt="Consof logo" />
          <img src={circuloCS} className="circle" alt="Consof logo" />         
        </a>
      </div>
    </div>
  )
}

export default App