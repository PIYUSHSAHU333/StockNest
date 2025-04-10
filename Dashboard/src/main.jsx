import { StrictMode } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>

    <Route path='/*' element={<Home/>} />

   </Routes>
   
   </BrowserRouter>
  </StrictMode>,
)
