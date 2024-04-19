//import { useState } from 'react'
import './App.css'
import Carrusel from './components/Carrusel/Carrusel'
import Login from './components/Login/Login'
import Publicar from './components/Publicar/Publicar'
import Registro from './components/Registro/Registro'

import { UserContextProvider } from './context/UserContext'
//import useUser from './hooks/useUser'

function App() {
 
  //const isLoggedIn = false;

  return (
    <UserContextProvider>

      <div>
        
        <Carrusel/>
        <hr/>

        <Login/>
        <hr/>
        <Registro/>

        <hr />

        <Publicar/>
      </div>
      
      </UserContextProvider>
  )
}

export default App
