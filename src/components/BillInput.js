const BillInput = ({bill, onSetBill}) => {
  const setBill = (event) => {
    onSetBill(event.target.value)
  }
  return (
    <form>
      <label>How much was the bill ?</label>
      <input type='text' value={bill} onChange={setBill}/>
    </form>
  )
}

export default BillInput