import Caracteristicas from './components/Caracteristicas/Caracteristicas'
import Navbar from './components/NavBar/Nav'
import TarjetasCaracteristicas from './components/Caracteristicas/tarjetasCaracteristicas'
import Testimonios from './components/Testimonios/testimonios'
import QuienesSomos from './components/QuienesSomos/quienesSomos'
import Nequipo from './components/NuestroEquipo/nuestroEquipo'
import TarjetaE from './components/NuestroEquipo/tarjetaEquipo'
import Nancy from '../../frontend/src/assets/img/Nancy.png'
import Giovanny from '../../frontend/src/assets/img/IMG-20240416-WA0007.jpg'
import Sebastian from '../../frontend/src/assets/img/Foto CV3 1.png'
import Mlaura from '../../frontend/src/assets/img/IMG-20240416-WA0010.jpg'
import Ruth from '../../frontend/src/assets/img/perfil.png'
import Luz from '../../frontend/src/assets/img/Luz.png'
import Sol from '../../frontend/src/assets/img/Sol.png'
import Cris from '../../frontend/src/assets/img/1707232856350.jpg'


function App() {
  
  
  
  return (
    <>
     
      
      <Navbar/>
      
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
     
      <QuienesSomos/>

      <Nequipo>
         
         <TarjetaE
         foto={Nancy}
         nombre="Nancy Marchena"
         puesto="Tester QA"
         linkedin="https://www.linkedin.com/in/nancy-marchena/"
         git="#"
        />

       
        <TarjetaE
        foto={Mlaura}
        nombre="M Laura Carballo"
        puesto="Front End Developer"
        linkedin="https://www.linkedin.com/in/maria-laura-carballo/"
        git="#"
        />
       
        <TarjetaE
        foto={Sol}
        nombre="Sol Rázuri Fiorilli "
        puesto="Front End Developer"
        linkedin="https://www.linkedin.com/in/sol-r%C3%A1zuri-frontenddeveloper/"
        git="https://github.com/Abisol-2711"
        />
   
        <TarjetaE
        foto={Giovanny}
        nombre="Giovanny Mena D"
        puesto="Diseñador UX/UI"
        linkedin="https://www.linkedin.com/in/giovanny-mena-d/"
        git="#"
        />

        <TarjetaE
        foto={Ruth}
        nombre="Ruth Vaccari"
        puesto="Front End Developer"
        linkedin="https://www.linkedin.com/in/ruth-vaccari-b271a6268/"
        git="#"
        />

        <TarjetaE
        foto={Sebastian}
        nombre="Mauricio Daza"
        puesto="Back End Developer"
        linkedin="https://www.linkedin.com/in/mauricio-daza/"
        git="#"
        />

        <TarjetaE
        foto={Sebastian}
        nombre="Sebastián Gómez"
        puesto="Diseñador UX/UI"
        linkedin="https://www.linkedin.com/in/sebasr-gomez90/"
        git="#"
        />


       <TarjetaE
        foto={Luz}
        nombre="Luz Frere"
        puesto="Front End Developer"
        linkedin="https://www.linkedin.com/in/luzfrere/"
        git="https://github.com/Frere-Luz"
        />   


        <TarjetaE
        foto={Cris}
        nombre="Crispthofer Rincon"
        puesto="Back End Developer"
        linkedin="https://www.linkedin.com/in/carmurrain/"
        git="#"
        />

        </Nequipo>




       
      
      
    </>
  )
}

export default App
