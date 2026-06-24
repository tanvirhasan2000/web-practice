function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted.");
}
export default function Form(){
    return (
        <form  ><p>This is the form </p>
            <input type="text" placeholder="Write Something" />
            
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}