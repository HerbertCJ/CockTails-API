import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSearch } from "../features/cocktail/cocktailSlice"

function SearchForm() {
  const dispatch = useDispatch()
  const {searchTerm} = useSelector((store) => store.cocktail)
  const searchValue = useRef('')

  const searchCocktail = () => {
    dispatch(updateSearch(searchValue.current.value))
  }

  return (    
    <section className="section-search">
      <form>
        <label htmlFor="name">Search your favorite cocktail</label>
        <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
      </form>
      
    </section>
  )
}
export default SearchForm