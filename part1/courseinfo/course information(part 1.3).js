const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p1 = {props.part1.name} ex1 = {props.part1.exercises} />
      <Part p2 = {props.part2.name} ex2 = {props.part2.exercises} />
      <Part p3 = {props.part3.name} ex3 = {props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const Part = (props) => {
  return (
  <div>  
  {props.p1} {props.ex1} 
  {props.p2} {props.ex2} 
  {props.p3} {props.ex3}
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} /> 
      <Total total={total}/>
    </div>
  )
}

export default App