import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Title = ({course}) => <h1>{course}</h1>


  const Paragraph = ({part},{exercises}) =>
  {
    return(
    <p>
    {part} {exercises}
    </p>)
  }

  const Total = ({parts}) =>
  {
    return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  }

  const Content = ({parts}) => 
  {
    return(
    <div>
      <Paragraph part={parts[0].name} exercises={parts[0].exercises}/>
      <Paragraph part={parts[1].name} exercises={parts[1].exercises}/>
      <Paragraph part={parts[2].name} exercises={parts[2].exercises}/>      
    </div>
    )
  }



  return (
    <div>
      <Title course={course.name} />
      <Content parts={course.parts} />       
      <Total parts={course.parts}  />
    </div>
  )
}

export default App