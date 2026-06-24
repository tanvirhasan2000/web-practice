import { v4 as uuidv4 } from 'uuid';

import { useState } from "react";

export default function TodoList() {
    let [todo, setTodo] = useState([{task:"sample task",id:uuidv4(),isDone:false}]); // টাস্কের লিস্ট
    let [task, setTask] = useState(""); // ইনপুট ফিল্ডের বর্তমান মান

    // টাস্ক লিস্টে যুক্ত করার ফাংশন
    let addTask = () => {
        // ফাঁকা টাস্ক যেন অ্যাড না হয় তার জন্য চেক
            // পুরনো লিস্টের সাথে নতুন টাস্কটি যুক্ত করা হলো
            setTodo((prevTodos)=>{
                return [...prevTodos,{task:task,id:uuidv4(),isDone:false }]
            })
            setTask(""); // অ্যাড হওয়ার পর ইনপুট ফিল্ড খালি করে দেওয়া হলো

    };

    // ইনপুট ফিল্ডে টাইপ করার সময় স্টেট আপডেট করার ফাংশন
    let updateTask = (event) => {
        setTask(event.target.value); // টাইপ করা ভ্যালু task স্টেটে সেভ হচ্ছে
    };
    let deleteTodo=(id)=>{
       setTodo((prevTodos)=>todo.filter((prevTodos)=>prevTodos.id!=id));
       
    }
    let upperCaseAll=()=>{
        // it will go to todo and detect all the object and upper case all the object . 
        //-- step 1 :accessing todo map
            setTodo((prevTodos)=>(
                prevTodos.map((todo)=>{
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            }
        ))
                
            )
       
    }
    let upperCaseOn =(id)=>{
        setTodo((todo)=>
        todo.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                }
            }else{
                    return todo;
                }
        })
        );
    };
    let markAsDone =(id)=>{
        setTodo((todo)=>
        todo.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                }
            }else{
                    return todo;
                }
        })
        );
    };
    let markAllDone=(id)=>{
        setTodo(
            (todo)=>todo.map((todo)=>{
                return{
                    ...todo,
                    isDone:true
                }
            })
        )
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Add a Task"  
                value={task} // এখানে task স্টেট বসবে
                onChange={updateTask} 
            />
            <button onClick={addTask}>Add Task</button>
            <br /><br /><br /><br />
            
            <h4>Task List</h4>
            <hr />
            <ul>
                {
                    todo.map((todo) => ( 
                        // map করার সময় key প্রপার্টি দেওয়াটা বেস্ট প্র্যাকটিস
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"Line-through"}:{}}>{todo .task}</span>
                           &nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button onClick={()=>upperCaseOn(todo.id)}>Uppee Case</button>
                            <button onClick={()=>markAsDone(todo.id)}>Done</button>
                           
                            
                            </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>UpperCase all</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>markAllDone(todo.id)}>Mark all Done </button>
        </div>
    );
}