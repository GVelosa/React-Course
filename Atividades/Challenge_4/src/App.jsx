import './App.css'
import UserDetails from "./componentes/UserDetails"
function App() {
  const pessoas = [
    {id: 1, nome: "Ana", idade: 17, profissao: "Estudante"},
    {id: 2, nome: "João", idade: 20, profissao: "Engenheiro"},
    {id: 3, nome: "Mariana", idade: 19, profissao: "Advogada"},
    {id: 4, nome: "Rafael", idade: 16, profissao: "Estudante"},
    {id: 5, nome: "Juliana", idade: 18, profissao: "Professor"},   
  ]
  return (
    <>
      <h1>Checagem de candidatos</h1>
      {pessoas.map((pessoa) =>(
        <UserDetails key={pessoa.id} name={pessoa.nome} age={pessoa.idade} job={pessoa.profissao}/>
      ))}
     
    </>
  )
}

export default App
