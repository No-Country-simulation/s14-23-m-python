import Nosotros from '../../components/Nosotros/Nosotros';
import QuienesSomos from '../../components/QuienesSomos/quienesSomos';
import Nequipo from '../../components/NuestroEquipo/nuestroEquipo';
import TarjetaE from '../../components/NuestroEquipo/tarjetaEquipo';

import Nancy from '../../assets/img/Nancy.png'
import Giovanny from '../../assets/img/IMG-20240416-WA0007.jpg'
import Sebastian from '../../assets/img/Foto CV3 1.png'
import Mlaura from '../../assets/img/IMG-20240416-WA0010.jpg'
import Ruth from '../../assets/img/perfil.png'
import Luz from '../../assets/img/Luz.png'
import Sol from '../../assets/img/Sol.png'
import Cris from '../../assets/img/1707232856350.jpg'
import Mauricio from '../../assets/img/1701276580292.jpg'

import Comentarios from '../../components/Comentarios/Comentarios';

const SobreNosotros = () => {
    return (
        <>
        <Nosotros/>

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
        foto={Mauricio}
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

        <Comentarios/>
        </>
      );
}
 
export default SobreNosotros;