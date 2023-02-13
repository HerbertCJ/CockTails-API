import Loading from '../components/Loading'
import SearchForm from '../components/SearchForm'
import { useEffect, useState } from 'react'
import CockTail from '../components/CockTail'
import { setLoading, updateList } from '../features/cocktail/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function Home() { 
  const {cocktailsList, loading, searchTerm} = useSelector((store) => store.cocktail)
  console.log(searchTerm)
  const dispatch = useDispatch()    

  const fetchDrinks = async () => {
    try {
        dispatch(setLoading(true))
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        dispatch(updateList(data))
        dispatch(setLoading(false))     
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
      <h2 className='title'>Cocktails</h2>
      <div className='cocktails-list'>
        {cocktailsList.drinks.map((item) => {          
          return <CockTail key={item.idDrink} {...item} />
        })}

      </div>
    </section>
  )
}
export default Home