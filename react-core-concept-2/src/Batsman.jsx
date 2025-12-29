import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = ()=>{
        const updateRun = runs + 1;
        setRuns(updateRun)
    }

    const handleFour = ()=>{
        const updateRun = runs + 4;
        const updateFours = fours +1;
        setFours(updateFours)
        setRuns(updateRun)
    }

    const handleSix = ()=>{
        const updateRun = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(updateRun)
    }

    return(
        <div>
            <h3>Team: Bangladesh</h3>
            {
                runs > 50  && <li>Team Score 50+</li>
            }
            <h4>Score: {runs}</h4>
            <p>Sixes: {sixes}</p>
            <p>Fours: {fours}</p>

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour} style={{margin: "10px"}}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}