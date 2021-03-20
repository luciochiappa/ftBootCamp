import React, { useDebugValue, useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




const Stats = (props) =>
{
  const all = props.good + props.bad + props.bad
  if(all)
  {
    const avg = ((props.good*1) +  (props.neutral*0.5) + (props.bad*0))/all
    return(
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {all}</p>
        <p>Avg: {avg}</p>
      </div>    
    )
  }
  else
    return <p>No stats to show</p>
}

const HandleGood =() => 
{
  return(
    setGood((prevGood) =>{return prevGood + 1})
  )
}
const HandleNeutral =() => 
{
  return(
    setNeutral((prevNeutral) =>{return prevNeutral + 1})
  )
}

const HandleBad =() => 
{
  return(
    setBad((prevBad) =>{return prevBad + 1})
  )
}

  return (
    <div>
      <button onClick={HandleGood}>GOOD</button>
      <button onClick={HandleNeutral}>NEUTRAL</button>
      <button onClick={HandleBad}>BAD</button>

      <Stats good={good} neutral={neutral} bad={bad}/>
    
    </div>
  )
}

export default App