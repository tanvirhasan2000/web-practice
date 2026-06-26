import UserDetail from "./UserDetail"


export default function UserFull({persons}){
    return (
        <div>
        <h2>Friends Detais </h2>
        {
           persons.map((person)=>{
            return <UserDetail key={person.id} id={person.id} name={person.name}/>
        }) 
        }
        
        </div>
    )
}