import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButton from './likeButton.jsx'
import Counter from './Counter'
import BtnLike from './BtnLike.jsx'
import LudoBoard from './Ludo/LudoBoard.jsx'
import TodoList from './working/TodoList.jsx'
import Lottery from './working/Lottery/Lottery.jsx'
import TickitNum from './working/tickit/TickicNum.jsx'
function App() {  
  return (
    <div>
      <h1>States in React </h1>
      <TickitNum num={5}/>
    </div>
  )
}
export default App
