import './nosotros.css';
import imagenManos from '../../assets/img/manos-juntas.png';
import imagenAgrupada from "../../assets/img/Group89.png";
import imagenIconoPersona from "../../assets/img/user.png";
import imagenIconoFlecha from "../../assets/img/repeat.png";
import imagenIconoOjo from "../../assets/img/eye.png";
import imagenIconoTablero from "../../assets/img/clipboard.png";

const Nosotros = () => {
    return (
        <div className="container-nosotros">

            <p className="titulo_nosotros">Sobre Nosotros</p>
            <p className="texto_nosotros"> Bienvenido a <span>Gardenshare</span>, tu comunidad de intercambio de plantas en Argentina.
                En <span>Gardenshare</span>, nos apasiona conectar a los amantes de la jardinería de toda la localidad
                para compartir conocimientos, experiencias y, por supuesto, plantas. Nuestra plataforma
                es el lugar perfecto para encontrar nuevas adiciones verdes para tu jardín,
                intercambiar consejos de cuidado de plantas y conocer a otros entusiastas
                de la jardinería en tu área. <br />Únete a nuestra creciente comunidad
                y juntos cultivemos la belleza natural en nuestros hogares y vecindarios.</p>


            <img className="imagen_manos" src={imagenManos} alt="manos-juntas" />
            <img className="imagen_agrupada" src={imagenAgrupada} alt="planta_usando_formas" />

            <div className="iconos_con_cifras">
                <div className='recuadros_nosotros'>
                    <div >
                        <img src={imagenIconoPersona} alt="icono_persona" />
                        <span className="nosotros_icono_cifras">+500</span>
                        <p className='nosotros_icono_texto'>usuarios</p>
                    </div>
                    <div>
                        <img src={imagenIconoFlecha} alt="icono_flechas" />
                        <span className="nosotros_icono_cifras">+250</span>
                        <p className='nosotros_icono_texto'>intercambios</p>
                    </div>
                    <div>
                        <img src={imagenIconoOjo} alt="icono_ojo" />
                        <span className="nosotros_icono_cifras">+1100</span>
                        <p className='nosotros_icono_texto'>visitas</p>
                    </div>
                    <div>
                        <img src={imagenIconoTablero} alt="icono_tablero" />
                        <span className="nosotros_icono_cifras">+1500</span>
                        <p className='nosotros_icono_texto'>publicaciones</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;