
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './carrusel.css';
import planta2 from '../../assets/m1 1.png';
import planta1 from '../../assets/m2 1.png';
import planta3 from '../../assets/m2 2.png';


const Carrusel = () => {
    return ( 
        <>
            <div className="contenedor-carrusel">
                <p className='subtitulo1'>Top 5 de la semana</p>
                <p className='body2'>Descubre las plantas más populares, cuidadosamente seleccionadas por nuestra comunidad</p>

                <div className="carrusel">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={planta1} />
                        <div className="texto-planta">
                            <p className='nombre-planta'>Sansevieria trifasciata</p>
                            <p className='descripcion-planta'>Planta ornamental apta para interiores, además de ser una especie muy resistente a condiciones ambientales desfavorables como el aire seco...</p>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={planta2} />
                        <div className="texto-planta">
                            <p className='nombre-planta'>Browningia hertlingiana</p>
                            <p className='descripcion-planta'>Cacto de tamaño arborescente a arbóreo, columnar de hasta 8 m de altura de hasta 3,8 cm de largo y 4 a 6 de radiales. Las flores son blancas de 5 cm de diámetro.</p>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={planta3} />
                        <div className="texto-planta">
                            <p className='nombre-planta'>Succulentus</p>
                            <p className='descripcion-planta'>Planta resistente a la sequía, ya que las hojas, tallo y raíces se han vuelto más carnosos debido al desarrollo de tejido de almacenamiento de agua.</p>
                        </div>
                   
                    </SwiperSlide>
                
                </Swiper>
                </div>
            </div>
        </>
     );
}
 
export default Carrusel;