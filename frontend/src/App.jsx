//import { useState } from 'react'
import './App.css'

import Inicio from './components/Inicio/Inicio';
import Nosotros from './components/Nosotros/Nosotros';
import Comentarios from './components/Comentarios/Comentarios';
import Contacto from './components/Contacto/Contacto';

function App() {
  

  return (
    <>
      <div>
        
        <Inicio/>
        <Nosotros/>
        <Comentarios/>
        <Contacto/>
        
      </div>
      
    </>
  )
}

export default App
