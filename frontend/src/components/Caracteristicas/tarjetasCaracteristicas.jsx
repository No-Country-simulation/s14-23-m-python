import './caracteristicas.css';
import './Caracteristicas'

const TarjetasCaracteristicas = (props) => {
    return ( 
        
       <div className='tarjeta-caracteristicas'>
            
            <div className={props.tarjetas}>
               
            </div>

            <div className='desc-caracteristicas'>
                <h3 className='h3Caracteristicas'>{props.tituloTarjeta}</h3>
                <p className='parrafoCaracteristicas'>{props.descripcionTarjeta}</p>
            </div>
           

        </div>
        
     );
}
 
export default TarjetasCaracteristicas;