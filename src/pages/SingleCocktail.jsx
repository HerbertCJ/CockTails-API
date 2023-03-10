import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const resp = await fetch(`${url}${id}`)
        const data = await resp.json()        
        if(data.drinks) {
          const {strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = data.drinks[0]
          const ingredients = [
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
          ]
          const newCocktail = {
            name, image, info, category, glass, instructions, ingredients,
          }
          setCocktail(newCocktail)
          setLoading(false)
        } else {
          setCocktail(null)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if(loading) {
    return <Loading />
  }

  if(!cocktail) {
    return <h2 className='title'>no cocktail to display</h2>
  }

  const {name, image, category, info, glass, instructions, ingredients} = cocktail
  return (
    <section className="section-center">
      <div className='single-cocktail'>
        <Link to='/' className='btn btn-success'>Back Home</Link>
        <h2 className='title'>{name}</h2>
        <div className='single-drink-info'>
          <img src={image} alt={name} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>Name: </span>
              {name}
            </p>
            <p>
              <span className='drink-data'>Category: </span>
              {category}
            </p>
            <p>
              <span className='drink-data'>Info: </span>
              {info}
            </p>
            <p>
              <span className='drink-data'>Glass: </span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>Instructions: </span>
              {instructions}
            </p>
            <p>
            <span className='drink-data'>Ingredients: </span>
              {ingredients.map((item, index) => {
                return (
                  item ? <div key={index}>{item}</div> : null
                  )
              })}                   
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleCocktail