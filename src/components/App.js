import {useState} from 'react'
import FirstPersonInput from './FirstPersonInput.js'

const App = () => {
  const options = [
    { 
      value: 0,
      description: 'Terrible ! (0%)'
    },
    { 
      value: 0.05,
      description: 'Not bad ! (5%)'
    },
    { 
      value: 0.1,
      description: 'Good ! (10%)'
    },
    { 
      value: 0.2,
      description: 'Awesome ! (20%)'
    },
  ]

  const [firstSelect , setFirstSelect] = useState(null)

  return (
    <>
      <div>777</div>
      <FirstPersonInput options={options} />
    </>

  )
}

export default App