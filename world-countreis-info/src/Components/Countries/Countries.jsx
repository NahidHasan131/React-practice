import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ promiseCountries }) => {
    const countries = use(promiseCountries);
    console.log(countries);
    return (
        <div>
            <h1>Travelling Countries: {countries.length}</h1>
            {
             countries.map(country => <Country key={country.name.common} country={country}></Country>)
            }
        </div>
        
    );
};

export default Countries;