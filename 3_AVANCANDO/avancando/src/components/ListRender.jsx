import { useState } from "react";

 const ListRender = () =>{
    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        {id:1,name:"Matheus",age:31},
        {id:2,name:"Pedro",age:29},
        {id:3,name:"Josias",age:54}
])

    const deleteRandon = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    } 

    return(
        <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandon}>Deletar aleatório</button>
        </div>
       
    )
 }

 export default ListRender;