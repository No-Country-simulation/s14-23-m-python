import { CiHeart } from 'react-icons/ci'

function Detail() {
  return (
    <section className="contentDetail">
      <div className="contentTitle">
        <h2 className="titleDetail">Browningia hertlingiana</h2>
        <div className="favorite">
          <CiHeart className="iconHeart" />
        </div>
      </div>
      <hr className="line" />
      <div className="contentData">
        <p className="textData">
          <span className="spanData">Especie:</span> Fanerogama
        </p>
        <p className="textData">
          <span className="spanData">Ubicación:</span> Junín
        </p>
        <p className="textData">
          <span className="spanData">Luminosidad:</span> Sol
        </p>
        <p className="textData">
          <span className="spanData">Origen:</span> Perú
        </p>
        <p className="textData">
          <span className="spanData">Tamaño:</span> 8 m de altura
        </p>
        <p className="textData">
          <span className="spanData">Riego:</span> Marzo - Septiembre
        </p>
      </div>
      <div className="contentDescription">
        <h3 className="titleDescription">Descripción:</h3>
        <p className="textDescription">
          Es un cacto de tamaño arborescente a arbóreo, columnar de hasta 8 m de
          altura , de 18 o más costillas y 1 a 3 de espinas centrales de hasta
          3,8 cm de largo y 4 a 6 de radiales. Las flores son blancas de 5 cm de
          diámetro.
        </p>
      </div>
      <div className="contentForm">
        <h3 className="formTitle">Disponibilidad:</h3>
        <form className="form">
          <div className="contentInput">
            <input type="radio" name="option" id="regalo" className="input" />
            <label htmlFor="regalo" className="label">
              Regalo
            </label>
          </div>
          <div className="contentInput">
            <input
              type="radio"
              name="option"
              id="intercambio"
              className="input"
            />
            <label htmlFor="intercambio" className="label">
              Intercambio
            </label>
          </div>
        </form>
      </div>
      <button className="btn">Contactar con el proveedor</button>
    </section>
  )
}

export default Detail
