import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tarefa 1</h1>
      <h2>Praticando React</h2>
      <img class="logo" src="./public/vite.svg" alt="Vite logo" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit ipsum molestias dolorem quaerat recusandae, totam dolores corporis. Voluptatibus vero eligendi iure eveniet quae ducimus, aut maiores. Enim, necessitatibus debitis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illo maxime voluptatibus incidunt accusantium excepturi veniam reprehenderit inventore mollitia, iste atque consectetur, id sint? Recusandae repellendus eaque neque dolore. Aliquam?</p>
      <a href="https://youtu.be/yBLdQ1a4-JI?si=RhGnzQzxtngWcv8o" target='_blank'>Link</a>
      
    </>
  )
}

export default App
