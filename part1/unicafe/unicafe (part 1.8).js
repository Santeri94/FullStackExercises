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

const Statistics = (props) => {
  return (
    <div>
      <DisplayStats 
      good={props.good} 
      bad={props.bad} 
      neutral={props.neutral} 
      total={props.good + props.bad + props.neutral} 
      average={(props.good - props.bad) / (props.good + props.bad + props.neutral)} 
      positive={props.good / (props.good + props.bad + props.neutral) * 100} />
</div>
  )
}

const DisplayStats = (props) => {
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Bad: {props.bad}</p>
      <p>Neutral: {props.neutral}</p>
      <p>All: {props.total}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  const feedback = "Give some feedback"
  const results = "Statistics:"
  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)

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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App