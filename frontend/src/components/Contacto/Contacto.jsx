import './contacto.css';
import imagenSeguir from '../../assets/img/user-check.png';
import imagenMensaje from '../../assets/img/message-circle.png';
import imagenMail from '../../assets/img/mail.png';
import imagenSmartphone from '../../assets/img/smartphone.png';
import imagenPin from '../../assets/img/map-pin.png';
import imagenRedes from '../../assets/img/iconos-redes.png';
import imagenMaceta3 from '../../assets/img/m3.png';
import imagenMaceta2 from '../../assets/img/m2.png';
import imagenMaceta1 from '../../assets/img/m1.png';
import imagenAvatar from '../../assets/img/imagen-avatar.png';

const Contacto = () => {

    return (

        <div className="container_contacto">
            <div className="titulo_contacto">
                <span className='usuario_contacto'>
                    <p className='nombre_contacto'>Julieta Porro</p>
                    <p className='ocupacion_contacto'>Estudiante de Agronomia</p>
                </span>
                <span className='boton_contacto' >
                    <button type="button" className='estilo_boton_contacto'>
                        <span><img src={imagenSeguir} alt="user-check" /></span>
                        <span className='texto_btn_contacto' >Seguir</span>
                    </button>
                    <button type="button" className='estilo_boton_contacto'>
                        <span><img src={imagenMensaje} alt="mensaje" /></span>
                        <span className='texto_btn_contacto' >Mensaje</span>
                    </button>
                </span>
            </div>

            <div className="aside_contacto">
                <img className='img_avatar_contacto' src={imagenAvatar} alt="imagen_avatar_contacto" />
                <div className="info_contacto">
                    <p className='titulo_info_contacto'>Info</p>
                    <div className="email_contacto">
                        <img className='img_icono_contacto' src={imagenMail} alt="icono_email_contacto" />
                        <p className='texto_contacto'>Email:</p>
                        <p className='datos_contacto'>julietaporro@gmail.com</p>
                    </div>
                    <div className="telefono_contacto">
                        <img className='img_icono_contacto' src={imagenSmartphone} alt="icono_celular_contacto" />
                        <p className='texto_contacto'>Telefono:</p>
                        <p className='datos_contacto'>+54987412345</p>
                    </div>
                    <div className="ubicacion_contacto">
                        <img className='img_icono_contacto' src={imagenPin} alt="icono_pin_contacto" />
                        <p className='texto_contacto'>Ubicacion:</p>
                        <p className='datos_contacto'>Neuquen, <br /> Calle Belgrano 1234</p>
                    </div>

                    <div className='redes_contacto'>
                        <img className='img_redes_contacto' src={imagenRedes} alt="imagen_redes_contacto" />
                    </div>
                </div>

            </div>
            <div className="area_descripcion_contacto">
                <p className='titulo_descripcion_contacto'>Descripcion</p>
                <p className='texto_descripcion_contacto'>Apasionada de la naturaleza y la belleza que emana cada planta.
                    Con una sonrisa siempre lista para compartir conocimientos
                    sobre jardinería y intercambiar experiencias botánicas.
                    Su amor por las plantas es palpable en cada rincón verde de sus hogar,
                    donde cada especie tiene su historia y cuidados especiales.
                    Dispuesto a conectar con otros amantes de la jardinería
                    para intercambiar esquejes, semillas y consejos
                    para hacer florecer aún mas su pasión por la naturaleza. </p>
            </div>
            <div className="publicaciones_contacto">
                <p className='titulo_publicaciones_contacto'>Publicaciones</p>
                <div className="grp_tarjetas_contacto">
                    <div className="tarjeta_contacto">
                        <img className='img_tarjeta_contacto' src={imagenMaceta2} alt="maceta2_contacto" />
                        <div className='nombre_planta_contacto'>
                            <p className='texto_tarjeta_contacto'>Sansevieria <br /> trifasciata</p>
                        </div>
                    </div>
                    <div className="tarjeta_contacto">
                        <img className='img_tarjeta_contacto' src={imagenMaceta3} alt="maceta3_contacto" />
                        <div className='nombre_planta_contacto'>
                            <p className='texto_tarjeta_contacto'>Sansevieria <br /> trifasciata</p>
                        </div>
                    </div>
                    <div className="tarjeta_contacto">
                        <img className='img_tarjeta_contacto' src={imagenMaceta1} alt="maceta1_contacto" />
                        <div className='nombre_planta_contacto'>
                            <p className='texto_tarjeta_contacto'>browningia <br /> hertlingiana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto