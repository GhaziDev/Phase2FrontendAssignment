

type ErrorProps ={
    error:boolean
    card:Array<any>|undefined
  
  }
  function DisplayCard({error,card}:ErrorProps):any{
    if(card &&!error){
      return(
        card.map((c)=>{
          return(
          <div className='card-div'>
            <div className='left-div'>
              <img src={c.card_images[0].image_url}></img>
            </div>
            <div className='right-div'>
            <ul key='unique' style={{listStyleType:'none'}}>
              <li key='name'>
                Name : {c.name}
              </li>
              <li key='atk'>
              {c.atk?`Attack: ${c.atk}`:''}
              </li>
              <li key='def'>
              {c.def?`Defense: ${c.def}`:''}
              </li>
              <li key='race'>
                Race: {c.race}
    
              </li>
              <li key='type'>
                Type: {c.type}
              </li>
              <li key='desc'>
                Description: {c.desc}
              </li>
              <li>
              {c.attribute?`Attribute: ${c.attribute}`:''}
              </li>
              <li>
                {c.archetype?`Archetype: ${c.archetype}`:''}
              </li>
            </ul>
            </div>
          </div>
          )
        })
      )
    }
    if(error){
      return(
        <div className='error-div' style={{color:'red'}}>
          NO CARD FOUND!
        </div>
      )
    }
    else{
      return null
    }
  }


  export default DisplayCard