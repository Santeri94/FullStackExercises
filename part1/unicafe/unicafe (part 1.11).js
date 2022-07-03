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
  if (props.good == 0 && props.bad == 0 && props.neutral == 0){
    return (
      <div>
        There is no feedback!
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <tr><td><StatisticsLine text="Good:" value={props.good} /></td></tr>
        <tr><td><StatisticsLine text="Bad:"  value={props.bad} /></td></tr>
        <tr><td><StatisticsLine text="Neutral:"  value={props.neutral} /></td></tr>
        <tr><td><StatisticsLine text="Total:"  value={props.good + props.bad + props.neutral} /></td></tr>
        <tr><td><StatisticsLine text="Average:"  value={(props.good - props.bad) / (props.good + props.bad + props.neutral)} /></td></tr>
        <tr><td><StatisticsLine text="Positive:"  value={props.good / (props.good + props.bad + props.neutral) * 100} percentage="%" /></td></tr>
        </tbody>
       </table>
</div>
  )
}


const StatisticsLine = (props) => {                      
  return (
    <div>
      {props.text} {props.value} {props.percentage}
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
