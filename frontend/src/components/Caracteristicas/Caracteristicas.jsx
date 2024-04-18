import './caracteristicas.css';
import React from 'react'
import './tarjetasCaracteristicas'




const Caracteristicas = ({children}) => {
    return ( 
        
        <section className='caracteristicas'>

        <div className='titulo-car'>
            <h3 className='caracteriza'>Que nos caracteriza</h3>
            <p className='parrafoSlogan'>Nos esforzamos por crear una comunidad acogedora y colaborativa para facilitar el intercambio.</p>
        </div>
       
       {children}
        
        </section>
     );
}
 
export default Caracteristicas;
