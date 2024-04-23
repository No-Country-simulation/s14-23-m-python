import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules'
import estrellas from '../../assets/img/estrellas.png'
import './testimonios.css';
import user1 from '../../assets/img/3a906b3de8eaa53e14582edf5c918b5d.jpg';
import user2 from '../../assets/img/perfil-hombre-vivo.png'
import user3 from '../../assets/img/05b8745bdd2b7b992e0d30bd26a9242f.jpg'
import user4 from '../../assets/img/perfil-mujer-vivo.png'
import user5 from '../../assets/img/Perfil-hombre-básico_738242395.jpg'


const Testimonios = () => {
    return ( 

  <>
    
    <div className='titulo-test' >
       
           <h2 >Que dicen nuestros usuarios</h2>
    </div>
    <Swiper
      modules={[Pagination]}
      spaceBetween={150}
      slidesPerView={3}
      pagination={{ clickable:true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='Swiper-container'

      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
     

      
    >
   
    <SwiperSlide>
    <div className="testimonio">
      <div className="encabezado-testimonio">
        <div className="cont-img-user">
          <img src={user1} alt="" width={56} />
        </div>
        <div className="cont-name-user">
          <h3>Juliana Santander</h3>
          <p>Floristería Paraíso</p>
        </div>
      </div>

      <div className="cuerpo-test1">
        <p>Me encanta esta plataforma</p>
        <img src={estrellas} alt="" width={100} className="img-estrellas" />
      </div>

      <div className="cuerpo-test2">
        <p><span className="tilde">“</span>El intercambio es simple y seguro, la búsqueda es fantástica, esta comunidad es muy cálida siempre presta ayudar, compartiendo consejos para crecer e inspirar a otros. 
          <span className="tilde">”</span>
        </p>
      </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="testimonio">
      <div className="encabezado-testimonio">
        <div className="cont-img-user">
          <img src={user2} alt="" width={56} />
        </div>
        <div className="cont-name-user">
          <h3>Carlos Narocki</h3>
          <p>Floristería Pasochoa</p>
        </div>
      </div>

      <div className="cuerpo-test1">
        <p>Busqueda impecable</p>
        <img src={estrellas} alt="" width={100} className="img-estrellas" />
      </div>

      <div className="cuerpo-test2">
        <p>
          <span className="tilde">“</span>
          Antes no podía encontrar la planta que necesitaba para poder decorar mi tienda, pero me encontré con esta plataforma que solo con especificar su tipo y ubicación geográfica me da los resultados que necesito además de los cuidados que debo tener con cada una de ellas.
          <span className="tilde">”</span>
        </p>
      </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="testimonio">
      <div className="encabezado-testimonio">
        <div className="cont-img-user">
          <img src={user3} alt="" width={56} />
        </div>
        <div className="cont-name-user">
          <h3>Julieta Porro</h3>
          <p>Estudiante de Agronomía</p>
        </div>
      </div>

      <div className="cuerpo-test1">
        <p>Increible plataforma</p>
        <img src={estrellas} alt="" width={100} className="img-estrellas" />
      </div>

      <div className="cuerpo-test2">
        <p>
          <span className="tilde">“</span>
          Gardenshare me ha salvado la vida en mis estudios más de una vez, los recursos educativos que esta plataforma posee, además de los artículos informativos para el cuidado de cada una de las plantas, me han hecho poder amar esta plataforma ya que deseo mejorar cada día y cuidar de mis amadas plantas.
          <span className="tilde">”</span>
        </p>
      </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="testimonio">
      <div className="encabezado-testimonio">
        <div className="cont-img-user">
          <img src={user4} alt="" width={56} />
        </div>
        <div className="cont-name-user">
          <h3>Marta Prieto</h3>
          <p>Floristería Amanecer</p>
        </div>
      </div>

      <div className="cuerpo-test1">
        <p>Eficiencia y rapidez</p>
        <img src={estrellas} alt="" width={100} className="img-estrellas" />
      </div>

      <div className="cuerpo-test2">
        <p>
          <span className="tilde">“</span>
          ¡Qué gran descubrimiento esta plataforma de intercambio de plantas! La experiencia de intercambiar plantas aquí ha sido increíble. La calidad de las plantas ofrecidas por los usuarios es impresionante, y la comunidad es muy solidaria y apasionada por la jardinería. 
          <span className="tilde">”</span>
        </p>
      </div>
    </div>
    </SwiperSlide>


    <SwiperSlide>
    <div className="testimonio">
      <div className="encabezado-testimonio">
        <div className="cont-img-user">
          <img src={user5} alt="" width={56} />
        </div>
        <div className="cont-name-user">
          <h3>Juan Garcia</h3>
          <p>Jardín La Rosa </p>
        </div>
      </div>

      <div className="cuerpo-test1">
        <p>La diversidad es increible</p>
        <img src={estrellas} alt="" width={100} className="img-estrellas" />
      </div>

      <div className="cuerpo-test2">
        <p>
          <span className="tilde">“</span>
          Estoy encantado con esta plataforma de intercambio de plantas. He tenido la oportunidad de intercambiar plantas con varios usuarios y cada experiencia ha sido satisfactoria. Además, el proceso de intercambio es seguro y confiable. ¡Gracias por crear esta comunidad tan maravillosa para los amantes de las plantas!
          <span className="tilde">”</span>
        </p>
      </div>
    </div>
    </SwiperSlide>
  
  </Swiper>

</>     
        
        
       

 
     );
 }
 
export default Testimonios;