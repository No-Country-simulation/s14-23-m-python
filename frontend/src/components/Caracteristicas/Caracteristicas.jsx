import './caracteristicas.css';
import icono1 from '../../assets/5167547.png';

const Caracteristicas = () => {
    return ( 
        <div>
            <h2>Caracteristicas</h2>
            <div className="caracteristica">
                <div className="contenedor-imagen">
                    <img className="icono" src={icono1} alt="icono" />
                </div>
                <div className="descripcion">
                    <h3>Titulo de Caracteristica</h3>
                    <p>Texto</p>
                </div>

            </div>

        </div>
     );
}
 
export default Caracteristicas;
