const Persons = ({persons,deletePerson}) => {
  return(
    <div>
    {persons.map((person) => {
      return (
        <div key={person.name}>
        {person.name} {person.number} <button onClick={() => deletePerson(person.id,person.name)}>Delete
    </button></div>)})}
    </div>)
    }
export default Persons