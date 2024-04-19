import React from "react";
import "./nuestroEquipo.css";
import twitter from '../../assets/img/Vector.png'
import linkedin from '../../assets/img/linkedin.png'
import git from '../../assets/img/github.png'

const TarjetaE = (props) => (
  <div className="tarjeta-equipo">
    <div className="cont-img-iequipo">
      <img src={props.foto} alt="" className="img-integrante" />
    </div>

    <div className="cont-nombre-redes">
      <div className="nombre-integrante">
        <h2 className="h2-nombreI">{props.nombre}</h2>
        <p className="p-puestoI">{props.puesto}</p>
      </div>

      <div className="redes-integrante">
          <img src={twitter} alt="logo twitter" className="l-twi"/>
          <a href={props.linkedin} target="blank"><img src={linkedin} alt="logo linkedin" className="l-linkedin"/></a>
          <a href={props.git}><img src={git} alt="logo github" className="l-git"/></a>
      </div>
    </div>
  </div>
);

export default TarjetaE;
