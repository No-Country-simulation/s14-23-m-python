import ContentCardsCatalog from '../../components/Catalog/ContentCardsCatalog'
import SearchCatalog from '../../components/Catalog/SearchCatalog'
import FiltersCatalog from '../../components/Catalog/FiltersCatalog'
import './catalogStyles.css'

function Catalog() {
  return (
    <section className="catalogSection">
      <div className="contentIntro">
        <div className="contentText">
          <h2 className="title">Catálogo de plantas disponibles</h2>
          <p className="subtitle">
            Sube una planta para regalar o intercambiar.
          </p>
        </div>
        <SearchCatalog />
      </div>
      <div className="main">
        <div className="contentFilters">
          <FiltersCatalog />
          <FiltersCatalog />
          <FiltersCatalog />
          <FiltersCatalog />
        </div>
        <ContentCardsCatalog />
      </div>
    </section>
  )
}

export default Catalog;
