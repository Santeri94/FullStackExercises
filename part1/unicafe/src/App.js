import { useState } from 'react'

const Header = (props) => {
  return (
      <h1>{props.text}</h1>
    )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0)
  const header = "Anecdote of the day"
  const mostvotes = "Anecdote with the most votes"

  const randomLine = (min, max) => {
    return(
      Math.floor(Math.random() * (max-min+1)) + min
    )}
  
  const getQuote = () => {
    return(
      setSelected(randomLine(0,6))
  )}

  const setVotes = () => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)}
    
    for (const [key] of Object.entries(points)) {
      if (points[key] > points[mostVotedAnecdote]) {
        setMostVotedAnecdote(key)
      }
    }

  return (
    <div>
      <Header text = {header} />
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes!</p>
      <Button onClick={getQuote} text='Random Quote' />
      <Button onClick={setVotes} text='Vote' />
      <Header text = {mostvotes} />
      <div>{anecdotes[mostVotedAnecdote]}</div>
      <div>has {points[mostVotedAnecdote]} votes</div>
    </div>
  )
}
export default App

