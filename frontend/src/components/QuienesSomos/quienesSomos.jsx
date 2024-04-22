import "./quienesSomos.css";
import logoshare2 from "../../assets/img/de8c2f9936b47e291f82280c6d09339e.png";
import imgmision from "../../assets/img/Group 86.png";
import imgvision from "../../assets/img/feather.png";

const visiones = [
  {
    title: "Sostenibilidad:",
    content:
      " Promovemos prácticas de jardinería responsables que respeten y protejan el medio ambiente.",
  },

  {
    title: "Comunidad:",
    content:
      "Valoramos la creación de una red de apoyo entre los amantes de la jardinería, fomentando el intercambio y la colaboración.",
  },

  {
    title: "Diversidad:",
    content:
      "Celebramos la variedad de plantas, personas y experiencias en nuestra comunidad, reconociendo que la diversidad enriquece nuestras vidas.",
  },

  {
    title: "Integridad:",
    content:
      "Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo la confianza de nuestros usuarios.",
  },

  {
    title: "Respeto:",
    content:
      "Valoramos y respetamos las opiniones, conocimientos y habilidades de cada miembro de nuestra comunidad.",
  },

  {
    title: "Bienestar:",
    content:
      "Nos preocupamos por el bienestar físico, emocional y social de nuestros usuarios, creando un entorno positivo y acogedor para todos",
  },
];

const QuienesSomos = () => (
  <section>
    <div className="cont-quienes-somos">
      <h2 className="titulo-quienes">Quienes somos</h2>

      <div className="cont-logo-acerca">
        <div className="cont-logo-share">
          <img src={logoshare2} className="img-logoshare2" />
        </div>

        <div className="cont-acerca-share">
          <p className="parrafo-acerca">
            "En <strong>Gardenshare</strong>, somos más que una plataforma de intercambio de
            plantas; somos una comunidad comprometida con el amor por la
            naturaleza y el cultivo de relaciones entre personas y plantas.
            Desde nuestros humildes comienzos, nos hemos dedicado a fomentar la
            conexión entre los amantes de la jardinería en Argentina,
            proporcionando una plataforma intuitiva y amigable para intercambiar
            plantas, conocimientos y experiencias. Nos enorgullece ser un
            espacio donde la pasión por la jardinería se une con el deseo de
            crear un mundo más verde y saludable. Con <strong>Gardenshare</strong>, estamos
            sembrando las semillas de un futuro más floreciente para nuestras
            comunidades y nuestro planeta."
          </p>
        </div>
      </div>

      <div className="cont-nuestra-mv">
        <div className="cont-mision">
          <div className="cont-img-nmision">
            <img src={imgmision} alt="" className="img-nmision" />
            
          </div>
          <p className="p-mision-vision">Nuestra misión</p>
          <p className="p-mision-2 ">
            Nuestra misión en Gardenshare es cultivar una conexión más profunda
            entre las personas y la naturaleza a través del intercambio de
            plantas y conocimientos. Nos esforzamos por crear un espacio
            inclusivo y acogedor donde los amantes de la jardinería, ya sean
            principiantes o expertos, puedan encontrar inspiración, apoyo y
            amistad mientras contribuyen al crecimiento verde de sus entornos
            locales.
          </p>

          <p className="p-mision-2 m-b">
            Al conectar a las personas a través de su amor compartido por las
            plantas, aspiramos a crear una red global de jardineros
            comprometidos con la protección del medio ambiente, la promoción de
            la biodiversidad y la construcción de un futuro más verde y próspero
            para las generaciones venideras.
          </p>
        </div>

        <div className="cont-vision">
          <div className="cont-img-nvision">
            <img src={imgvision} alt="" className="img-nvision" />
          
          </div>  
          <p className="p-mision-vision">Nuestra visión</p> 
          <div className="lista-vision">
            {visiones.map((vision) => {
              return (
                <>
                  <li className="item-vision" key={vision.title}>
                    <strong>{vision.title}</strong> {vision.content}
                  </li>{" "}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuienesSomos;
