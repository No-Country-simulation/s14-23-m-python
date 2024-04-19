//import React from 'react';

import './login.css';
import bgLogin from '../../assets/bg-login.png';
import { useState } from 'react';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="contenedor-login">
                <div className="img-login">
                    <img src={bgLogin} alt="" />
                </div>
                <div className="contenedor-form-login">
                    <p className="titulo">¡Sé Bienvenido!</p>
                    <p className="frase">Deja que tus plantas viajen y encuentren nuevos hogares</p>
                   
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input className='input-login' type="text" placeholder='Correo electrónico' value={username} onChange={e => setUsername(e.target.value)}/>
                                <label className='' hidden>Correo electrónico</label>
                            </div>
                            <div>
                                <label className='contraseña' hidden>Contraseña</label>
                                <input className='input-login' type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>

                            <button className='btn-login' >Iniciar Sesión</button>
                        </form>
                    </div>
                    <div className="enlace-registro">
                        <p>¿Aún no tienes una cuenta? <span className=''>Regístrate</span></p>
                    </div>


                </div>
            </div>

        </>
    
    );
}

