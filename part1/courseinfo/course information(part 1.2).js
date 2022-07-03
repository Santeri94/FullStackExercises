App.js exercise 1.2 code
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
      <Part p1 = {props.part1} ex1 = {props.exercises1} />
      <Part p2 = {props.part2} ex2 = {props.exercises2} />
      <Part p3 = {props.part3} ex3 = {props.exercises3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} /> 
      <Total total={total}/>
    </div>
  )
}

export default App