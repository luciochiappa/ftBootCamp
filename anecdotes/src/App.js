import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [points, setPoints]  = useState(new Uint8Array(anecdotes.length))
   
  const [selected, setSelected] = useState(0)


const handleNext = () =>
{
  if(selected < (anecdotes.length-1) )
    setSelected(prevState =>  (prevState + 1))
  else
    setSelected(0)
}

const MejorVoto = (props) =>
{
  let cont = 0
  let aux = 0
  let aux2 = 0
  while(cont < props.points.length )
  {
    if(aux < props.points[cont])
    {
      aux = props.points[cont]
      aux2 = cont
    }
    cont+=1
  }
  return <h1>{props.anecdotes[aux2]}</h1>
}


const handleVote = () =>
{
  const copy = [...points]
  const one = 1
  if(!copy[selected])
    copy[selected] = one
  else 
    copy[selected] += one
  
  console.log(copy[selected])
  setPoints(copy)
}


function Display({anecdotes})
{
  return (
    <p>{anecdotes[selected]}</p>
  )
}




  return (
    <div>
      <Display anecdotes={anecdotes}/>
      <button   onClick={handleNext} >Next anecdote</button>
      <button points={points} onClick={handleVote} >Votar</button>
      <p>Votos: {points[selected]}</p>
      <MejorVoto anecdotes={anecdotes} points={points} />
  
    </div>
  )
}

export default App
