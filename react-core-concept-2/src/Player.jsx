import { useEffect, useState } from "react"

export default function Player(){

    const [player,  setPlayers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res  => res.json())
        .then( data => setPlayers(data))
    },[])

    return(
        <div>
            <h2>This is Player Component</h2>
            <h3>Players: {player.length}</h3>
            <ol>
                {
                    player.map(pl => <li key={pl.id}>name: {pl.name}</li>)
                }
            </ol>
        </div>
    )
}