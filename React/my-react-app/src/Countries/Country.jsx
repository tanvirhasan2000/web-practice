
import { useState } from 'react'
import './Country.css'
export default function Country({country,handleVisitedCountries,handleVisitedFlag}){
    const [visited,setVisited]=useState(false);
    
    const handleVisited=()=>{
        // setVisited(true);
        if(visited){
            setVisited(false);
        }else{
            setVisited(true);
        }

        handleVisitedCountries(country);
    }
    // console.log(country.population.population);
    return (
        <div className={`card ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h5>Name: {country.name.common}</h5>
            <p>Polulation: {country.population.population}</p>
            <button onClick={handleVisited}>{visited?'Visited':'Not Visited'} </button>
            <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag </button>
        </div>
    )
}