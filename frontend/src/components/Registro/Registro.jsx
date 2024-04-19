//import React from 'react';

import './registro.css';
import bgRegistro from '../../assets/bg-registro.jpg';

const Registro = () => {
    return (
        <>
            <div className="contenedor-registro">
                <div className="img-registro">
                    <img className='bgRegistro' src={bgRegistro} alt="" />
                </div>
                <div className="contenedor-form-registro">
                    <p className="titulo">¡Sé Bienvenido!</p>
                    <p className="frase">Intercambiar es una forma sostenible y amigable de expandir tu jardín.</p>
                    <div className="form">
                        <form>
                            <div>
                                <input className='input-registro' type="text" placeholder='Nombre completo'/>
                
                            </div>
                            <div>
                                <label className='correo-electronico' hidden>Correo electrónico</label>
                                <input className='input-registro' type="email" placeholder='Correo electrónico'/>
                            </div>
                            <div>
                                <label className='' hidden>Contraseña</label>
                                <input className='input-registro' type="password" placeholder='Contraseña' />
                            </div>
                            <div>
                                <label className='' hidden>Repetir Contraseña</label>
                                <input className='input-registro' type="password" placeholder='Repetir Contraseña' />
                            </div>
                            
                            <p className='terminos'>Acepto los Términos y Condiciones y la Política de protección de datos de gardenshare</p>

                            <button className='btn-registro'>Registrate y empieza hoy</button>
                        </form>

                        <div className="enlace-sesion">
                            <p>¿Ya tienes una cuenta? <span className='enlace-inicia-sesion'>Inicia sesión</span></p>
                        </div>
                    </div>
                    


                </div>
            </div>

        </>
    
    );
}
 
export default Registro;
