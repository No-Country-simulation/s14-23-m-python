import '../../styles/catalogStyles.css'
import { CiSearch } from 'react-icons/ci'

function SearchCatalog() {
  return (
    <form className="form">
      <CiSearch className="iconSearch" />
      <input type="text" placeholder="Buscar..." className="inputSearch" />
    </form>
  )
}

export default SearchCatalog
