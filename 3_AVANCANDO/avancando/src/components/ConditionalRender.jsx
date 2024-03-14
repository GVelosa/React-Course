import { useState } from 'react';

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name] = useState("João")


  return (
    <div>
        <h2>Condicional simples</h2>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        <h2>Condicional If ternário</h2>
        {name === "João" ? (
        <div>
            <p>
                O Nome é joão!
            </p>
        </div>            
        ) : (
        <div>
            <p>
                Nome não encontrado!
            </p>
        </div>
        )}
    </div>
  );
};

export default ConditionalRender;