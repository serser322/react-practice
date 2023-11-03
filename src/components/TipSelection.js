const TipSelection = ({options, select, onSetSelect, children}) => {
  const setSelect = (event) => {
    onSetSelect(event.target.value)
  }
  return (
    <form>
      <label htmlFor='tip'>{children}</label>
      <select name='tip' id='tip' value={select} onChange={setSelect}>
        { options.map(element => 
          <option value={element.value} key={element.description}>{element.description}</option>
        )}
      </select>
    </form>
  )
}

export default TipSelection