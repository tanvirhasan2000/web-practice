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
import TicketNum from './working/Tickit2/TicketNum.jsx'
import Ticket from './working/Tickit2/Ticket.jsx'
import LotteryMain from './working/Tickit2/LotteryMain.jsx'
import {sum} from "./working/Tickit2/helper.js"
function App() {  
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  }

  return (
    <div>
      <LotteryMain n={4} winCondition={winCondition}/>
    </div>
  )
}
export default App
