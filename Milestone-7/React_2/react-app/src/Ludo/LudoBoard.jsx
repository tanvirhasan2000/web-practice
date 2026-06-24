import {useState} from 'react';
export default function LudoBoard(){
    let [move,setMove]=useState({blue:0,red:0,yellow:0,green:0});
    let updateBlue=()=>{
        // শুধু move.value দিলে আপডেট হবে না । এর জন্য ৩ ডট ব্যাভার করতে হয়। 
        // কারন নতুন লোকেশন ডিটেক্ট এর জন্য 
        // -- 1 way 
        // move.blue+=1;
        // setMove({...move});

        // --2nd way 
        setMove((prevMove)=>{
            return {...prevMove, blue:prevMove.blue+1}
        });
    }
    let updateYellow=()=>{
        setMove((prevMove)=>{
            return {...prevMove,yellow:prevMove.yellow+1};
        })
    }
    let updateGreen=()=>{
        setMove((oldMove)=>{
            return {...oldMove,green:oldMove.green+1};
        })
    }
    let updateRed=()=>{
        setMove((oldMove)=>{
            return {...oldMove,red:oldMove.red+1};
        })
    }
    return (
        <div>
            <div className="board" >
                <p>Blue Moves = {move.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Yellow Moves = {move.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
                <p>Green moves = {move.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Red moves = {move.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            </div>

            </div>
    );
}