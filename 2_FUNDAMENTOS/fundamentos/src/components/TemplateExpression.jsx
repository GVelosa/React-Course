const TemplatesExpressions = () => {

    const name = "Matheus";
    const data = {
        age: 13,
        job: "Marceneiro"
    }

    return (
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Sua idade é de: {data.age}</p>
            <p>Sua profição é: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("Consolelog")}</p>
        </div>
    )

}

export default TemplatesExpressions