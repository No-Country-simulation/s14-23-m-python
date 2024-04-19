import './nuestroEquipo.css'



const Nequipo = ({children}) => (

    <section className='cont-n-equipo'>

        <div className='cont-equipo'>
            
                <div className='cont-titulo-nequipo'>

                    <h2 className='titulo-ne'>Conoce a nuestro equipo</h2>

                </div>

            <div className='cont-tarjetas-equipo'>
                
                {children}

            </div>


        </div>


    </section>


    
    );
    
    
    export default Nequipo;
