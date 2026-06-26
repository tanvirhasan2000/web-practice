import { useState } from "react"

export default function Batsman(){
    let [runs,setRuns]=useState(0);
    function handleRun(value){
        setRuns(runs+value);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score:{runs}</h1>
            <button onClick={()=>handleRun(1)}>Single</button>
            <button onClick={()=>handleRun(4)}>Four</button>
            <button onClick={()=>handleRun(6)}>Six</button>
        </div>
    )
}

/**
 *  Component
 * jsx
 * props
 * State
 * Event
 * [conditional rendering ]
 * 
 * 
 */
/**
 * ServerSide data load 
 * 1. API :url
 * 2.fetch("url");
 * .then(res=>res.json())
 * .then(data=>console.log(data));
 */