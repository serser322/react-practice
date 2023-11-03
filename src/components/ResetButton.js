const ResetButton = ({onReset, children}) => {
  return (
    <button onClick={onReset}>{children}</button>
  )
}

export default ResetButton