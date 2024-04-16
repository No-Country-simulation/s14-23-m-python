import './inicio.css';
import imagenInicio from '../../assets/img/Group_78.png';

const Inicio = () => {
    return (
        <div className="container_inicio">
            <div className="row_home">
                <div className="grid-item1_inicio">
                    <p className="titulo_home">Intercambia <br />
                        la <span id="alegria_inicio">Alegria</span></p>
                    <p className="subtexto_inicio">De cultivar con nuestra calida comunidad y descubre nuevas variedades</p>

                    <button className="boton_inicio" type="submit">Conectate con amantes de la Jardineria</button>
                </div>
                <div className="grid-item2_inicio">
                    <img src={imagenInicio} alt="pareja-cultivando" />
                </div>
            </div>
        </div>

    );
}

export default Inicio;