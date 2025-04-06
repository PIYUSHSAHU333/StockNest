import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './LandingPage/Home/Homepage'
import Pricingpage from './LandingPage/Pricing/Pricingpage';
import Aboutpage from './LandingPage/About/Aboutpage';
import ProductsPage from './LandingPage/Products/ProductsPage';
import SignUpPage from './LandingPage/SignUp/SignUpPage';
import SupportPage from './LandingPage/Support/SupportPage';
import Navbar from './LandingPage/Navbar';
import Footer from './LandingPage/Footer';


createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <Navbar/>
  <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/About' element={<Aboutpage/>}></Route>
      <Route path='/Pricing' element={<Pricingpage/>}></Route>
      <Route path='/Support' element={<SupportPage/>}></Route>
      <Route path='/SignUp' element={<SignUpPage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
