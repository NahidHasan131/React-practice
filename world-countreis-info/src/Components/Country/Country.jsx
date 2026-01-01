import React from 'react';

const Country = ({ country }) => {
    return (
        <div>
            <h2>Name: {country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common}></img>
            <p>Independet: {country.independent ? "Free" : "Not Free"}</p>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;