// importing use State to use that 
import {useState} from "react"
export default function BtnLike(){
    let [isLiked,setIsLiked]=useState(false);
    let [count,setCount]=useState(0);

    let clicked=()=>{
        setIsLiked(!isLiked);
        setCount(count+1);
    };
    let likeStyle= {color:"red"};
    return(
        <div>
           
            <p onClick={clicked}>
                <p>Clicks:{count}</p>
                {isLiked?<i className="fa-solid fa-heart" style={likeStyle}></i>:<i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}