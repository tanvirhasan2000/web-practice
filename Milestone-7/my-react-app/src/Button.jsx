function printHello(){
    console.log("hello!");
}

export default function Button(){
    return (
        <div>
        <button onClick={printHello}> Click me</button>
        <p>This para is for event demo.</p>
        </div>
    )
}   
