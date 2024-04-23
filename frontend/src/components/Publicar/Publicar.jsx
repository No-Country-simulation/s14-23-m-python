//import React from 'react'
import './publicar.css';
import GotaRating from './GotaRating';
import LuzRating from './LuzRating';
import iconoupload from '../../assets/icon-uploadplant.png';

export default function Publicar({closeModal}) {

    //const file = document.getElementById('foto');
    //file.addEventListener('change', e => {
       // console.log(e.target.files[0]);
    //});

  return (
    <div className='modalBg'>
        <div className="contenedor-publicar">
            <div className="linea1">
            <div>
            <p className="titulo-publicar">Publicar una nueva planta</p>
            <p className="frase-publicar">Sube una planta para regalar o intercambiar.</p>

            </div>
            <div className='contenedor-btn-closed'>
            <button className='btn-closed' onClick={() => closeModal(false)}> X </button>
           
            </div>
            </div>
            
           
             <div className="form-publicar">
                <form>
                    <div className="carga-imagen">
                        <img className="icon-subir-planta" src={iconoupload} alt="icon-subir" />
                        <img src="" alt="" />
                        <input type="file" id="foto" accept='image/*'/>
                    </div>
                    <div className='primer-fila-form'>
                        <input className='input-publicar' type="text" placeholder='Nombre de la planta'/>
                        <input className='input-publicar' type="text" placeholder='Especie'/>
                    </div>
                    <div className='segunda-fila-form'>
                        <select className='input-publicar' placeholder="aqui">
                            <option value="someOption">Tamaño</option>
                            <option value="otherOption">Pequeña (hasta cm)</option>
                            <option value="otherOption">Mediana (de a cm)</option>
                            <option value="otherOption">Grande (de cm en adelante) option</option>
                        </select>
                        <input className='input-publicar' type="text" placeholder='Lugar de origen'/>
                    </div>
                    <div className='tercer-fila-form'>
                        <div className="ubicacion">
                            <p className="label-ubicacion">Ubicación</p>
                            <div className='opciones'>
                                <div className="opcion-interior">
                                    <input type="radio" id="masculino" name="genero" />
                                    <label className="label-opcioni" htmlFor="interior">                               Interior
                                    </label>
                                </div>
                                <div>
                                <input type="radio" id="femenino" name="genero" />
                                <label className="label-opcione" htmlFor="exterior">
                                Exterior
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="toxicidad">
                            <p className="label-toxicidad">Toxicidad</p>
                            <div className='opciones'>
                                <div className="opcion-interior">
                                    <input type="radio" id="masculino" name="genero" />
                                    <label className="label-opcioni" htmlFor="interior">                               Ninguna
                                    </label>
                                </div>
                                <div>
                                <input type="radio" id="femenino" name="genero" />
                                <label className="label-opcione" htmlFor="exterior">
                                Si, en mascotas
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuarta-fila-form">
                        <div className="luz">
                            <p className='label-luz'>Cantidad de Luz</p>
                            <LuzRating/>
                        </div>
                        <div className="riego">
                            <p className='label-riego'>Riego</p>
                            <GotaRating/>
                        </div>
                    </div>
                    <div className="datos">
                        <textarea className="datos-adicionales" cols="70" rows="4" placeholder='Datos Adicionales'></textarea>
                    </div>
                    <button className='btn-publicar'>Publicar Planta</button>
                </form>
            </div>
        </div>

    </div>
  )
}
