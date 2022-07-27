const Filter = ({search,newSearch,handleSearch}) => {
  return (
  <form onSubmit={search}>
  <div>Filter names: <input value={newSearch} onChange={handleSearch}/> 
  <button type="submit">search</button></div>
  </form>
)}
export default Filter