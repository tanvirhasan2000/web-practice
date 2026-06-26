
import { useEffect,useState } from "react"
export default function Test(){
    const [count,setCount]=useState(0);
    const [total,setTotal]=useState(1);
    function handleCount(){
        setCount(count+1);
        setTotal(total+count+1);
    }

    // first-> Side -effect function 
    // second -> cleanup function 
    // third-> comma seperated dep list 
    // --- mention some entities 
    // এর ভিতর থেকে কোন লজিক কাজে লাগলেই আবার নতুন করে ফার্স্ট থেকে রান করে ফেলবে । 
    // useEffect(()=>{
    //     first 
    //     return()=>{
    //         second 
    //     }
    // },[third])


    // Variation 1 
    // runs on every render

    // useEffect(()=>{
    //     alert("i will run on each render")
    // })


    // Variation 2- runs only first render . 
    // useEffect(()=>{
    //     alert("I will run on only 1st render");
    // }
    // ,[])

    // Variation 3--it will update on when the value updated. 
    // useEffect(()=>{
    //     alert("I will run every time when count is update");
    // },[count])

    // variation 4 
    // multiple dependencies 
    useEffect(()=>{
        alert("Count and Total is updated");
    },[count,total])
    // variation 5 
    // add cleanup function 
    useEffect(()=>{
        alert("count is updated");
        return ()=>{
            alert("count is unmounted from UI");
        }
    },[count])


    return (
        <div>
            <h2>Count {count} Total:{total}</h2>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}