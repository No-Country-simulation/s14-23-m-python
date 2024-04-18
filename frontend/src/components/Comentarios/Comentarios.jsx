import './comentarios.css';
import imagenComentarios from '../../assets/img/rectangle_229.png'


const Comentarios = () => {
    return (
        <div className="container_comentarios">

            <p className='titulo_comentarios' >Dejanos tus comentarios</p>

            <div className='form_comentarios'>
                
                <input className='input_comentarios' type="text" name="nombres_apellidos" id="nombres_apellidos" placeholder='nombre completo' required />

                <input className='input_comentarios' type="email" name="comentarios_email" id="comentarios_email" placeholder='correo electronico' required />


                <textarea className='area_comentarios' name="area_comentarios" id="area_comentarios" placeholder="Datos adicionales" cols="70" rows="10"></textarea>

                <button className='boton_comentarios' type="submit">Enviar Mensaje</button>
            </div>
            <div className='imagen_comentarios'>
                <img className='img_comentarios' src={imagenComentarios} alt="" />
            </div>
        </div>
    );
}

export default Comentarios;