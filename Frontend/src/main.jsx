import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './LandingPage/Home/Homepage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <HomePage />
    </div>
  </StrictMode>,
)
