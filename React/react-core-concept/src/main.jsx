import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import app1 from './app1.jsx'
import AppMain from './AppMain.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMain/>
  </StrictMode>,
)
