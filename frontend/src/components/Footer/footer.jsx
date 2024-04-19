import "./footer.css";
import logoshareF from "../../assets/img/marca garden 2@4x-8 1.png";
import twi from "../../assets/img/twitter.png";
import you from "../../assets/img/youtube.png";
import inst from "../../assets/img/instagram.png";
import enviar from "../../assets/img/Group 47.png";

const Footer = () => (
  <footer>
    <div className="cont-footer">
      <div className="contf-enlaces-redes">
        <div className="contf-enlaces">
          <ul className="enlaces-footer">
            <li>
              <a href="#Inicio" className="enlace-footer m-right-e">
                Inicio
              </a>
            </li>
            <li>
              <a href="#Catalogo" className="enlace-footer m-right-e">
                Catalogo
              </a>
            </li>
            <li>
              <a href="#Sobre" className="enlace-footer ">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>

        <div className="contf-redes-copy">
          <div className="f-copy">
            <div className="cont-img-logosf">
              <img src={logoshareF} alt="" />
            </div>
            <div className="cont-parrafo-f">
              <p className="parrafo-f">
                © 2024, Gardenshare, Inc. All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="f-redes">
            <p className="parrafo-f m-left-e m-right-p">Siguenos en:</p>
            <img
              src={twi}
              alt=""
              width={22}
              height={20}
              className="m-right-e"
            />
            <img
              src={you}
              alt=""
              width={22}
              height={20}
              className="m-right-e"
            />
            <img src={inst} alt="" width={22} height={20} />
          </div>
        </div>
      </div>

      <div className="contf-subcripcion">
        <p className="p-sub-1">Suscríbete a nuestro informativo</p>
        <p className="p-sub-2">
          Estate atento a las últimas novedades y actualizaciones de nuestra
          plataforma.
        </p>
        <img src={enviar} alt="" width={267} height={40} />
      </div>
    </div>
  </footer>
);

export default Footer;
