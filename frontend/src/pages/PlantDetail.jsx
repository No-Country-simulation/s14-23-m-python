import Carrousel from '../components/PlantDetail/Carrousel'
import Detail from '../components/PlantDetail/Detail'
import '../styles/plantDetailStyles.css'

function PlantDetail() {
  return (
    <section className="detailSection">
      <div className="contentText">
        <h2 className="title">Catálogo de plantas disponibles</h2>
        <p className="subtitle">
          Contamos con una gran variedad de plantas que podrás intercambiar.
        </p>
      </div>
      <div className="contentInfo">
        <Carrousel />
        <Detail />
      </div>
    </section>
  )
}

export default PlantDetail
