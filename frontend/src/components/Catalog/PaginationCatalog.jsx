import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function PaginationCatalog() {
  return (
    <section className="pagination">
      <div className="contentArrow">
        <IoIosArrowBack className="arrows" />
      </div>
      <div className="contentNumbers">
        <p className="selected">01</p>
        <p className="others">02</p>
        <p className="others">03</p>
      </div>
      <div className="contentArrow">
        <IoIosArrowForward className="arrows" />
      </div>
    </section>
  )
}

export default PaginationCatalog
