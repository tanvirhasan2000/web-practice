import {useState} from 'react'
// import "./LotteryMain.css"
import { genTickit,sum } from './helper';
import Ticket from './Ticket';

export default function LotteryMain({n=3,winCondition}){
    let[tickit,setTickit]=useState(genTickit(n));
    let isWinning =winCondition(tickit);
    let newTickit=()=>{
        setTickit(genTickit(n));
    }
    return (
        <div><h1>Lottery is working </h1> 
       <div className="tickit">
        <Ticket ticket={tickit}/>
       </div>
       <button onClick={newTickit}>Generate new </button>
       <h3>{isWinning&& "Congratulation , You won!"}</h3>
       </div>
       
    );
}