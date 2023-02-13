import { Link } from "react-router-dom"

function CockTail({idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic}) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className='btn btn-success'>
          Details
        </Link>
      </div>
    </article>
  )
}
export default CockTail