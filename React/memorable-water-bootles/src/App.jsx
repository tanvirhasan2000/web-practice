import { Suspense, useState } from 'react'

import './App.css'
import Bottles from './Components/Bottles'

const bottlesPromise =fetch('./Bottles.json')
.then(res=>res.json())

function App() {
  

  return (
    <>
    <h1>Watter Bottles</h1>
    <Suspense fallback={<h3>"Bottles are Loading "</h3>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>
    </>
  )
}

export default App
