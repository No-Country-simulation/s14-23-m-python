import logo from '../../assets/img/e16013005b9cce452e0c8b61c9d7eb8d.png'; 
import './Nav.css'

const Navbar = () => (
<nav className="navbar">
   
    <a href="#inicio" className="navbar-logo">
        <img src={logo} alt="Logo" height="60" /> 
    </a>

    <ul>
        
        <li><a href="#Inicio">Inicio</a></li>
        <li><a href="#Catalogo">Catalogo</a></li>
        <li><a href="#Sobre">Sobre nosotros</a></li>
        
    </ul>

    <button className='btn-public'>Publicar</button>
    
    <div className='cont-button'>
        <button className='button'>Registrate</button>
        <button className='button background-black'>Iniciar sesión</button>
    </div>
    
</nav>
)


export default Navbar;