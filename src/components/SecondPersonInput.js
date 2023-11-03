const SecondPersonInput = ({ options, select, onSetSecondSelect }) => {
  return (
    <form>
      <label htmlFor='second'>How did second person like the service ?</label>
      <select name='second' id='second' value={select} onChange={onSetSecondSelect}>
        {
          options.map(element =>
            <option value={element.value} key={element.description}>{element.description}</option>
          )
        }
      </select>
    </form>
  )
}

export default SecondPersonInput