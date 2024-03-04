const Events = () =>{
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("O Evento Foi Ativado! ");
       
    };
    const renderSomething = (x) =>{
        if(x){
            return <h1>Retorna isso</h1>
        }else{
            return <h1>Retorna aquilo lá</h1>
        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Salve piasada")}>Clique para segundo evento</button>
            </div>
            <div>
            {renderSomething(true)}
            {renderSomething(false)}
            </div>
        </div>
    )
}
export default Events;