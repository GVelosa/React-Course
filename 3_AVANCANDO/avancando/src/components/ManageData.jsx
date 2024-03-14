import { useState } from "react";

const ManageData = () => {
    let somedata = 10;

    const [number,setNumber] = useState(20);
  return (
    <div>
        <div>
            <p>Valor: {somedata}</p>
            <button onClick={() => somedata = 15}>Mudar valor</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar valor</button>
        </div>
    </div>
  )
}

export default ManageData