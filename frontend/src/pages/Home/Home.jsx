import Inicio from '../../components/Inicio/Inicio'
import Carrusel from '../../components/Carrusel/Carrusel'

import Caracteristicas from '../../components/Caracteristicas/Caracteristicas'
import TarjetasCaracteristicas from '../../components/Caracteristicas/tarjetasCaracteristicas'
import Testimonios from '../../components/Testimonios/testimonios'



const Home = () => {
    
    return ( 
        <>
        <Inicio/>
        <Carrusel/>

        <Caracteristicas>
            <TarjetasCaracteristicas 
            tarjetas= 'cont-img-listado imglistado'
            tituloTarjeta= 'Listado de plantas'
            descripcionTarjeta='Extensa base de datos de plantas donde pueden explorar diferentes especies, variedades y características, con información detallada sobre cuidados y requerimientos.'
            />
            <TarjetasCaracteristicas 
            tarjetas= 'cont-img-intercambio imgintercambio'
            tituloTarjeta= 'Sistema de intercambio'
            descripcionTarjeta='Facilitamos el intercambio de plantas con funciones para crear listados de plantas disponibles, puedes buscar y establecer acuerdos de intercambio.'
            />
            <TarjetasCaracteristicas 
            tarjetas= 'cont-img-busqueda imgbusqueda'
            tituloTarjeta= 'Búsqueda avanzada'
            descripcionTarjeta='Permite a nuestros usuarios buscar plantas por nombre, tipo, cuidados específicos, ubicación geográfica, etc.'
            />
        </Caracteristicas>

        <Testimonios/>

        </>
    );
}
 
export default Home;