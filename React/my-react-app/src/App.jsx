

import './App.css'
import Countries from './Countries/Countries.jsx'
import { Suspense, useState } from 'react'

const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
  .then(res=>res.json());
function App() {
  

  return (
    <div>

      <Suspense fallback={"<p> Countries Loading </p>"}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </div>
   
  )
}

export default App
