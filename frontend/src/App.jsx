//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caracteristicas from './components/Caracteristicas/Caracteristicas'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Garden Share</h1>
        <p>
          Caracteristicas: Crea una cuenta y comienza a disfrutar de la app Es
          gratuito Comparte con otros amantes de las plantas
        </p>

        <Caracteristicas />
      </div>
    </>
  )
}

export default App
