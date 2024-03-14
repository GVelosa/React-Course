const ContainerChildren = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <p>O valore é de: {myValue}</p>
    </div>
  )
}

export default ContainerChildren