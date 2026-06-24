import {useState} from 'react'
import "./Lottery.css"
import { genTickit,sum } from './helper';

export default function Lottery(){
    let[tickit,setTickit]=useState(genTickit(3));
    let isWinning =sum(tickit)===15;
    let newTickit=()=>{
        setTickit(genTickit(3));
    }
    return (
        <div><h1>Lottery is working </h1> 
       <div className="tickit">
        <span>{tickit[0]}</span>
        <span>{tickit[1]}</span>
        <span>{tickit[2]}</span>
       </div>
       <button onClick={newTickit}>Generate new </button>
       <h3>{isWinning&& "Congratulation , You won!"}</h3>
       </div>
       
    );
}