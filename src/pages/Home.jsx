import { useCallback, useEffect, useState } from "react"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function Home() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchDrinks = useCallback(async () => {
    try {
        setLoading(true)
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        setList(data)
        setLoading(false)         
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}, [searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])

  return (
    <section className="section-center">
      <SearchForm setSearchTerm={setSearchTerm}/>
      <CocktailList loading={loading} list={list} setSearchTerm={setSearchTerm} />
    </section>
  )
}
export default Home