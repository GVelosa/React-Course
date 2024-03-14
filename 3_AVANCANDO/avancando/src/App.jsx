import { useState } from 'react'
import './App.css'

//Imagens
import City from "./assets/city.jpg"

//Componentes
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import ContainerChildren from './components/ContainerChildren'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'


function App() {
  // const name = "Paulo";
  // const [userName] = useState("Mario");

  const cars = [
    {id: 9, brand: "Lamborghini", color: "Verde", newCar: false, km: 12000},
    {id: 7, brand: "Porsche", color: "Prateada", newCar: false, km: 5000},
    {id: 6, brand: "BMW", color: "Branca", newCar: false, km: 7500},
    {id: 1, brand: "Ferrari", color: "Azul", newCar: false, km: 20000},
    {id: 5, brand: "Audi", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Mercedes-Benz", color: "Cinza", newCar: false, km: 9000},
    {id: 10, brand: "Jaguar", color: "Vermelha", newCar: false, km: 6000},
    {id: 4, brand: "Bugatti", color: "Preta", newCar: false, km: 18000},
    {id: 8, brand: "McLaren", color: "Laranja", newCar: true, km: 0},
    {id: 3, brand: "Lexus", color: "Dourada", newCar: false, km: 2500},
  ]
  
  // function showMenssage(){
  //   console.log("Evento do componente pai!");
  // }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      {/*  
      <h1>Avançando em React</h1>
      Imagem em public: 
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
         Imagem em assets: 
        <div>
          <img src={City} alt="Cidade" />
        </div> 
        <ManageData />
        <ListRender/>
        <ConditionalRender />
*/}
       {/* <h3>Props</h3>
        <ShowUserName name={userName} />
        <h3>Destructuring Props</h3>
        <CarDetails brand="VW" km={1000000} color="Preto" newCar={false}/>
        <h3>Reutilização de componentes</h3>
        <CarDetails brand="Fiat" km={2340000} color="Branco" newCar={false}/>
        <CarDetails color="Vermelho" brand="Volvo" km={0} newCar={true}/>
        <CarDetails km={0} brand="Ferrari"  color="Azul" newCar={true}/> */}

        <h3>Loop em array de objetos</h3>
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        ))}

        {/* <h1>Fragment</h1>
        <Fragment propFragmente="titulo 3"/>
        <h1>Children</h1>
        <ContainerChildren>
          <p>O que está sendo passado para o componente pelo pai</p>
        </ContainerChildren>
        <ContainerChildren myValue="Propriedade para mostrar que tbm funciona">
          <p>Mesma coisa mas um pouco diferente</p>
        </ContainerChildren> */}

        {/* <h3>Função em props</h3>
        <ExecuteFunction myFunction={showMenssage} /> */}

        {/* <h3>State Lift</h3>
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage}/> */}
    </>
  )
}

export default App