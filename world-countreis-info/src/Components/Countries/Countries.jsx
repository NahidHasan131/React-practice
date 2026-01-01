import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ promiseCountries }) => {

    const[visitedCount, setVisitedCount] = useState([]);
    const handleVisitedCountry = (country) => {
        const  newVisitedCount = [...visitedCount, country];
        setVisitedCount(newVisitedCount);
    }


    // const[visitedCount, setVisitedCount] = useState(0);

    // const handleVisitedCountry = () => {
    //     setVisitedCount(visitedCount + 1);
    // }
    // const handleNotVisitedCountry = ()=>{
    //     setVisitedCount(visitedCount - 1);
    // }

    const countries = use(promiseCountries);
    // console.log(countries);
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            {/* <h3>Count visited Country: {visitedCount}</h3> */}
            <h3>Traveled So  Far: {visitedCount.length}</h3>
            <ol>
                {
                    visitedCount.map(c => <li key={c.name.common}>{c.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    // countries.map(country => <Country key={country.name.common} country={country} onVisited={handleVisitedCountry} notVisited={handleNotVisitedCountry}></Country>)
                    countries.map(country => <Country key={country.name.common} country={country} onVisited={handleVisitedCountry}></Country>)
                }
            </div>
        </div>
        
    );
};

export default Countries;