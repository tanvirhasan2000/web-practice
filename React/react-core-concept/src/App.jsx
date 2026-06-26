
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts.jsx'
import Player from './Player.jsx'
import Players from './Players.jsx'
/**
 * 1. just wirte a simple fetch with conversion. 
 * 2. wrap the data loading component with suspense.
 * 
 */
  // handling User api 
const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
const fetchFriends=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
const friendsPromise = fetchFriends();


// posts api handling . 
const fetchPosts=async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}
const postPromise=fetchPosts();

function App() {
  function handleClick(){
    alert("I am clicked")
  }
  return (
    <>
    {/* Player Section  */}
    <Players></Players>

    {/* posts  */}
    <Suspense fallback={<h4>Posts are comming...</h4>}>
    <Posts postPromise={postPromise}></Posts>
    </Suspense>

    {/* User list  */}
    <Suspense fallback={<h3>Loading....</h3>}>
    <Users fetchUser={fetchUser}></Users>
    </Suspense>
    <Suspense fallback={<h3>Friends are comming </h3>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
    <h3>bla bla </h3>
    <button onClick={handleClick}>click me </button>
    <Batsman/>
     
    </>
  )
}

export default App
