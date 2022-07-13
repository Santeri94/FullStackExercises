const Header = ({ courses }) => <h2>{courses}</h2>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(newList => 
        <div key = {newList.id}>
          {newList.name} {newList.exercises}
        </div>
      )}
      </div>
  )}

const Total = ({parts}) => {
  const total = parts.reduce((s,p) => s+p.exercises,0)
    return (
      <strong>
        Total amount of exercises {total}
      </strong>
    )}

const Course = ({course}) => {
  return (
      <div>
        <Header courses = {course.name} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
      </div>
      )}
    

export default Course