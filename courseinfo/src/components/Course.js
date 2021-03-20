const Course = ({course}) => 
{
    const total = course.parts.reduce((s,p) => ({exercises:(s.exercises) + p.exercises}))

    return (
      <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => {
          return (
            <li key={part.id}>{part.name} / Ex: {part.exercises}</li>
          )
        })
        }
      </ul>
      <p>Total de ejercicios {total.exercises}</p>
      </div>
    )
}


export default Course