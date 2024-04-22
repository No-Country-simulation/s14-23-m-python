import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function FiltersCatalog() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section>
      <div
        className="contentTitle"
        style={{ backgroundColor: isOpen ? '#0AB861' : 'transparent' }}
        onClick={toggleOpen}
      >
        <h2 className="titleFilter">Más populares</h2>
        {isOpen ? (
          <IoIosArrowUp className="arrow" />
        ) : (
          <IoIosArrowDown className="arrow" />
        )}
      </div>
      {isOpen && (
        <ul className="list">
          <li className="item">browningia hertlingiana</li>
          <li>Sansevieria trifasciata</li>
        </ul>
      )}
    </section>
  )
}

export default FiltersCatalog
