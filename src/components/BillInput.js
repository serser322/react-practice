const BillInput = ({bill, onSetBillInput}) => {
  return (
    <form>
      <label>How much was the bill ?</label>
      <input type='text' value={bill} onChange={onSetBillInput}/>
    </form>
  )
}

export default BillInput