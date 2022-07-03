import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


const Display1 = props => <div>Good: {props.good}</div>
const Display2 = props => <div>Bad: {props.bad}</div>
const Display3 = props => <div>Neutral: {props.neutral}</div>
const Display4 = props => <div>All: {props.total}</div>
const Display5 = props => <div>Average: {props.average}</div>
const Display6 = props => <div>Positive: {props.positive} %</div>


const App = () => {
  // save clicks of each button to its own state

  const feedback = "Give some feedback"
  const results = "Statistics:"
  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)
  const total = good + bad + neutral
  const average = (good - bad) / total
  const positive = good / total * 100

  return (
    <div>
      <Header text = {feedback} />
      <Button
        onClick={() => addGood(good + 1)}
        text='Good'
      />
      <Button
        onClick={() => {addBad(bad + 1)}}
        text='Bad'
      />     
      <Button
        onClick={() => {addNeutral(neutral + 1)}}
        text='Neutral'
      />
      <Header text = {results} />
      <Display1 good={good} />
      <Display2 bad={bad} />
      <Display3 neutral={neutral} />
      <Display4 total={total} />
      <Display5 average={average} />
      <Display6 positive={positive} />
    </div>
  )
}

export default App