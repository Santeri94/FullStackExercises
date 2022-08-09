import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Display from './components/Display'
import Persons from './components/Persons'
import personServices from './services/services'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [searchList, setList] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    personServices
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const deletePerson = (id,name) => {
    if (window.confirm(`Delete ${name}?`)){
      personServices
      .deleteName(id)
      setPersons(persons.filter((person) => person.id !== id))
      setErrorMessage(`Person ${name} has been deleted!`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)}}
  
  const addNumber = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {name:newName, number:newNumber}
    const alreadyAdded = persons.find((person) => (person.name === newName))
    if (!alreadyAdded){
      personServices
      .create(personObject)
      setPersons(persons.concat(personObject))
      setErrorMessage(`Person ${newName} added!`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    }
    else {
      const person = persons.find((person) => (person.name === newName))
      const updatedNumber = { ...person, number: newNumber }
      const {id} = person
      const question = window.confirm(`Person ${newName} is already added, do you want to replace the number?`)
      if (question){
        personServices
        .update(id, updatedNumber)
        setPersons(persons.map((person) =>
                person.id !== id ? person : updatedNumber))
        setErrorMessage(`${newName} has been updated`)
          setTimeout(() => {
            setErrorMessage(null)}, 5000)
        setNewName('')
        setNewNumber('')
          }
      else{
      setErrorMessage(`Person ${newName} is already added!`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setNewName('')
      setNewNumber('')
      }}}
    
  const search = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      const searchObject = newSearch.toLowerCase()
      for (let i = 0; i < persons.length; i++){
        if (persons[i].name.toLowerCase().includes(searchObject)){
            setList(persons[i])
            setSearch('')
          }
        else {
          setSearch('')}}}

    const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)}
    
    const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)}

    const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter search={search} newSearch={newSearch} handleSearch={handleSearch} />
      <Display searchList={searchList} />
      <h3>Add new</h3>
      <PersonForm addNumber={addNumber} newName={newName} newNumber={newNumber}
       handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <div>
      <Persons persons={persons} deletePerson={deletePerson}/>
      </div>
    </div>
  )
}  
export default App 


