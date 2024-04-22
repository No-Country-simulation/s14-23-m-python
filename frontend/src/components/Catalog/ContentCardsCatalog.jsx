import CardCatalog from './CardCatalog'
import '../../styles/catalogStyles.css'
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
