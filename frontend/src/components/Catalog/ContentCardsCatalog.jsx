import CardCatalog from './CardCatalog'
import '../../pages/Catalogo/catalogStyles.css'
import PaginationCatalog from './PaginationCatalog'

function ContentCardsCatalog() {
  return (
    <section className="contentCatalog">
      <section className="contentCards">
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
        <CardCatalog />
      </section>
      <PaginationCatalog />
    </section>
  )
}

export default ContentCardsCatalog
