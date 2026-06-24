import {useState} from "react";
function init(){
    
    return Math.random();
}
export default function Counter(){
    let [count,setCount]=useState(init());
    console.log("componenet is rendered");
    console.log("outside count",{count});    
    let incCount=()=>{
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        })
        // setCount(25);
        
    };

    return (
        <div>
            <h1>Count={count}</h1>
            <button onClick={incCount}>Click To count </button>
        </div>
    );
}