import { useEffect, useRef } from "react"

function SearchForm({setSearchTerm}) {  
  const searchValue = useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  useEffect(()=> {
    searchValue.current.focus()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (    
    <section className="section-search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search your favorite cocktail</label>
        <input type="text" name='name' id="name" ref={searchValue} onChange={searchCocktail} />
      </form>
      
    </section>
  )
}
export default SearchForm