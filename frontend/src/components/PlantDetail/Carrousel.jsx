import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import plant1 from '../../assets/plant1.png'

function Carrousel() {
  return (
    <section className="carrousel">
      <div className="contentArrow">
        <IoIosArrowBack className="arrows" />
      </div>
      <div className="contentImg">
        <img src={plant1} alt="Plant" className="imgCarrousel" />
      </div>
      <div className="contentArrow">
        <IoIosArrowForward className="arrows" />
      </div>
    </section>
  )
}

export default Carrousel
