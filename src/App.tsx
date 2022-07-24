import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Button,Input} from '@mui/material';
import DisplayCard from './display';

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
      <h1 style={{color:'black'}}>Yu-Gi-Oh Cards Search</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Input value={input} onChange={(e)=>handleChange(e)}></Input>
        <Button type='submit' className='btn'>Search</Button>
        <DisplayCard card={card} error={error}></DisplayCard>
      </form>

    </div>
  )

}


export default App;
