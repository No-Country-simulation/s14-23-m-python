import '../../pages/Catalogo/catalogStyles.css'
import plant1 from '../../assets/plant1.png'
import { CiHeart } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

function CardCatalog() {
  return (
    <section className="card">
      <div className="favorite">
        <CiHeart className="iconHeart" />
      </div>
      <img src={plant1} alt="" className="imgCard" />
      <div className="contentTextCard">
        <NavLink to="/detalle-planta"> <p className="textCard">browningia hertlingiana</p></NavLink>
       
      </div>
    </section>
  )
}

export default CardCatalog
