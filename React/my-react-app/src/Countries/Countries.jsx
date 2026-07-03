import { use, useState } from "react"
import Country from "./Country";
import './Countries.css'
export default function Countries({countriesPromise}){
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlag,setVisitedFlag]=useState([]);

    const handleVisitedCountries=(country)=>{
       const newVisitedCountries =[...visitedCountries,country];
       setVisitedCountries(newVisitedCountries);
     
    }
    const handleVisitedFlag=(flag)=>{
        const newVisitedFlags=[...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags);
        

    }
     const countriesData=use(countriesPromise);
     const countries=countriesData.countries;

    return (
        <div className="cardMain">
            <h2>Countries </h2>
            <h3>total Visited flags{visitedFlag.length}</h3>
            <div>
                {
                    visitedFlag.map((flag,idx)=><img key={idx} className="visited-flag" src={flag}></img>)
                }
            </div>
            
            
            <h5>Total Country visited{visitedCountries.length}</h5>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            {
                countries.map(country=><Country 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag} 
                    key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    )
}


/**
 * 
 */