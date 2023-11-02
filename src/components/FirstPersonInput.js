const FirstPersonInput = ({options}) => {
  return (
    
    <form>
      <label htmlFor='first'>How did first person like the service ?</label>
      <select name='first' id='fist'>
        { options.map(element => 
          <option value={element.value} key={element.description}>{element.description}</option>
        )}
      </select>
    </form>
    

    
  )
}

export default FirstPersonInput