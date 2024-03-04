const Challenge = () => {
    const a = 2;
    const b = 3;
    return(
        <div>
            <p>Valor 1 é: {a}</p>
            <p>Valor 2 é: {b}</p>
            <button onClick={() => console.log(a + b)}>Clique para somar</button>
        </div>
    )
}
export default Challenge;