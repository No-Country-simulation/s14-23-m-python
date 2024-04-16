import '../Comentarios/comentarios.css';


const Comentarios = () => {
    return (
        <div claseName="container_comentarios">
            <div>
                <h4 class="titulo_comentarios" >Dejanos tus comentarios</h4>
                <div>
                    <label htmlFor="">Nombres y Apellidos</label>
                    <input type="text" name="nombres_apellidos" id="nombres_apellidos" placeholder='Julieta Cardenas Pena' required />
                </div>
                <div>
                    <input type="email" name="comentarios_email" id="comentarios_email" />
                </div>
                <div>
                    <textarea name="area_comentarios" id="area_comentarios" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default Comentarios;