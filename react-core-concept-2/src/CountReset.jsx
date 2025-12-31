import { useState } from "react"

export default function CountReset(){

    const [countNum, setCountNum] = useState(0)

    const handleAdd = ()=>{
        const addNum = countNum +1;
        setCountNum(addNum);
    }
    const handleRem = ()=>{
        const remNum = countNum -1;
        setCountNum(remNum);
    }
    const handleReset = ()=>{
        setCountNum(0);
    }

    return(
        <div>    
            <h3 >{countNum}</h3>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRem}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}