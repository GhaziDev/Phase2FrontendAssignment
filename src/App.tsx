import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Button,Input} from '@mui/material';

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

function App() {

  let [card,setCard] = useState<Array<any>|undefined>()
  let [input,setInput] = useState('')
  const [error,setError] = useState<boolean>(false)
  let handleSubmit = (e:any):void=>{
    e.preventDefault()
    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${input}`).then((res)=>{
      console.log(res.data.data)
      setCard(
        res.data.data
      )
      setError(false)
    }).catch((e)=>{
      console.log(` here : ${card}`)
      console.log(e.response)
      setError(true)
    })
  }

  let handleChange = (e:any)=>{
    setInput(
      e.target.value
    )


  }

  return(
    <div className='main'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Input value={input} onChange={(e)=>handleChange(e)}></Input>
        <Button type='submit' className='btn'>Search</Button>
        <DisplayCard card={card} error={error}></DisplayCard>
      </form>

    </div>
  )

}


export default App;
