import { useState } from 'react';
import logo from '../../assets/img/e16013005b9cce452e0c8b61c9d7eb8d.png'; 
import Publicar from '../Publicar/Publicar';
import './Nav.css'

import {NavLink} from 'react-router-dom';

const Navbar = () => {

    const [openModal, setOpemModal ] = useState(false);
    return(
        <nav className="navbar">
   
    <a href="#inicio" className="navbar-logo">
        <img src={logo} alt="Logo" height="60" /> 
    </a>

    <ul>
        <li>
            <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
            <NavLink to="/catalogo">Catalogo</NavLink>
        </li>
        <li>
            <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
        </li>
        
    </ul>

    <button className='btn-public' onClick={() => setOpemModal(true)}>
        Publicar
    </button>
    {openModal && <Publicar closeModal={setOpemModal}/>}
    
    <div className='cont-button'>
        <button className='button'>Registrate</button>
        <button className='button background-black'>Iniciar sesión</button>
    </div>
  
    
    </nav>
    );

};


export default Navbar;