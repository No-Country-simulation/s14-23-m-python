import './inicio.css';
import imagenInicio from '../../assets/img/Group_78.png';

const Inicio = () => {
    return (
        <div className="container_home">
            <div className="row_home">
                <div className="grid-item1_home">
                    <p className="titulo_home">Intercambia <br />
                        la <span id="alegria_home">Alegria</span></p>
                    <p className="subtexto_home">De cultivar con nuestra calida comunidad y descubre nuevas variedades</p>

                    <button className="boton_home" type="submit">Conectate con amantes de la Jardineria</button>
                </div>
                <div className="grid-item2_home">
                    <img src={imagenInicio} alt="pareja-cultivando" />
                </div>
            </div>
        </div>

    );
}

export default Inicio;