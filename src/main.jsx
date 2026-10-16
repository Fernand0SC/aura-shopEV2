import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { CarritoProvider } from './context/CarritoContext.jsx'
import { SesionProvider } from './context/SesionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SesionProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </SesionProvider>
  </React.StrictMode>,
)
