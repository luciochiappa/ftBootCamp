import React, { useDebugValue, useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



const Stats = (props) =>{
  return (
    <div>
      <p>{props.text}: {props.value}</p>
    </div>
  ) 
}


const Positive = (props) =>
{
  let avg = props.good + props.bad + props.bad
  let pos = (props.good / avg) * 100
  return(
    <p>Positivo: {pos}</p>
  )
}

const All = (props) =>
{
  let all = props.good + props.bad + props.bad
  return(
    <p>All: {all}</p>
  )
}

const Avg = (props) =>
{
  let all =(props.good + props.neutral + props.bad)

  let avg = ((props.good*1) +  (props.neutral*0.5) + (props.bad*0))/all
  return(
    <p>Avg: {avg}</p>
  )
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

      <Stats text='Good' value={good} />
      <Stats text='Neutral' value={neutral} />
      <Stats text='Bad' value={bad} />
      <All good={good} neutral={neutral} bad={bad}/>
      <Avg good={good} neutral={neutral} bad={bad}/>
      <Positive good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App