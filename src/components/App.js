import {useState} from 'react'
import BillInput from './BillInput.js'
import FirstPersonInput from './FirstPersonInput.js'
import SecondPersonInput from './SecondPersonInput.js'
import Amount from './Amount.js'
import ResetButton from './ResetButton.js'

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

  const [bill, setBill] = useState('')
  const [firstSelect, setFirstSelect] = useState(0.05)
  const [secondSelect, setSecondSelect] = useState(0.05)

  const firstTip = Math.round(Number(firstSelect) * Number(bill) * 100) / 100 
  const secondTip = Math.round(Number(secondSelect) * Number(bill)* 100) / 100 
  const totalAmount = Math.round((1 + Number(firstSelect) + Number(secondSelect)) * Number(bill)* 100) / 100

  const handleSetBill = (event) => {
    setBill(event.target.value)
  }

  const handleSetFirstSelect = (event) => {
    setFirstSelect(event.target.value)
  }

  const handleSetSecondSelect = (event) => {
    setSecondSelect(event.target.value)
  }

  const handleReset = () => {
    setBill('')
    setFirstSelect(0.05)
    setSecondSelect(0.05)
  }

  return (
    <>
      <h3>Tip Calculator</h3>
      <BillInput bill={bill} onSetBillInput={handleSetBill}/>
      <FirstPersonInput options={options} select={firstSelect} onSetFirstSelect={handleSetFirstSelect}/>
      <SecondPersonInput options={options} select={secondSelect} onSetSecondSelect={handleSetSecondSelect}/>
      <Amount>
        ${totalAmount} (${firstTip} + ${secondTip})
      </Amount>
      <ResetButton onReset={handleReset}>
        <div>Reset <span>🔄</span></div>
      </ResetButton>
    </>

  )
}

export default App