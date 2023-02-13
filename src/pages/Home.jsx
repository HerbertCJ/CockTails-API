import Loading from '../components/Loading'
import SearchForm from '../components/SearchForm'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { setLoading } from '../features/cocktail/cocktailSlice'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function Home() {
  const dispatch = useDispatch()
  const {loading, cocktailsList} = useSelector((store) => store.cocktail)
  const [searchTerm, setSearchTerm] = useState('')
  
  

  const fetchDrinks = async () => {
    try {
        dispatch(setLoading(true))
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        dispatch(setLoading(false))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  fetchDrinks()
}, [searchTerm])
  
  if(loading) {
    return <Loading />
  }

  if(cocktailsList < 1) {
    return (
      <section className='section-center'>
        <h2 className='title'>
          no cocktails matched your search criteria...
        </h2>
      </section>
    )
  }

  return (
    <section className="section-center">
      <SearchForm />
    </section>
  )
}
export default Home