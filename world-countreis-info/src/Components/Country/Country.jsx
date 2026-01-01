import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, onVisited}) => {

    const [Visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!Visited);
        onVisited(country)

    //    if(Visited === true){
    //     setVisited(false);
    //     notVisited();
    //    }
    //     else{
    //         setVisited(true); 
    //         onVisited();
    //     }
    }
    return (
        <div className={`country ${Visited && 'visited-country'}`}>
            <h2>Name: {country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common}></img>
            <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
            <p>Population: {country.population}</p>
            <button onClick={handleVisited}>
               {Visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;