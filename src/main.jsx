import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import { Whatsapp } from './assets/whatsapp/Whatsapp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Whatsapp 
      cellphone={ '+56232550875' }
      name={ 'Consof Ing' }
      slogan={ 'Contestamos a la brevedad!!!' }
      mensaje={ 'Como podemos ayudarte ?' }
    />
  </React.StrictMode>
)
