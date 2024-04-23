import '../../pages/Catalogo/catalogStyles.css'
import plant1 from '../../assets/plant1.png'
import { CiHeart } from 'react-icons/ci'

function CardCatalog() {
  return (
    <section className="card">
      <div className="favorite">
        <CiHeart className="iconHeart" />
      </div>
      <img src={plant1} alt="" className="imgCard" />
      <div className="contentTextCard">
        <p className="textCard">browningia hertlingiana</p>
      </div>
    </section>
  )
}

export default CardCatalog
