import Loading from './Loading'
import CockTail from './CockTail'

function CocktailList({loading, list}) {  
   
  if(loading) {
    return <Loading />
  }

  if(list.drinks < 1 || list.drinks === undefined) {
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
      <h2 className='title'>Cocktails</h2>
      <div className='cocktails-list'>
        {list.drinks.map((item) => {          
          return <CockTail key={item.idDrink} {...item} />
        })}

      </div>
    </section>
  )
}
export default CocktailList