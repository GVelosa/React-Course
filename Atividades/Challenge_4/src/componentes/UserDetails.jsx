import './UserDetails.css'
const UserDetails = ({name, age, job}) => {
  return (
    <>
        <h2>Candidato: {name}</h2>
        <ul>
            <li>Idade: {age}</li>
            <li>profissão: {job}</li>
        </ul>
        {age >= 18 ? (
          <div><p className="aprovado">Esse candidato é apto a carteira de habilitação!</p></div>
        ) 
        : (
          <div> <p className="reprovado">Esse candidato não é apto a carteira de habilitação!</p></div>) 
        }
    </>
  )
}

export default UserDetails