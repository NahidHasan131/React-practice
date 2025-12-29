import { useState } from "react"

export default function Counter(){

    const counterStyle = {
        border: '2px solid orange', 
        padding: '50px 100px 50px 100px'
    }

    const [count, setCount] = useState(0);
    const handleCount = ()=>{
        const newCount = count +1;
        setCount(newCount)
    }

    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleCount}>Count</button>
        </div>
    )
}