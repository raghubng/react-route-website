
import React from "react";
import './assets/css/style.min.css'
//import logo from './assets/images/logo.png'

import Header from './Component/Pages/Header';
import Footer from './Component/Pages/Footer';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Service from './Component/Pages/Service';
import Contact from './Component/Pages/Contact';
import Portfolio from "./Component/Pages/Portfolio";
import {Route, Routes } from 'react-router-dom';
//import Header from './Component/Pages/Header';

function App() {


  return (
 
    <div>
  
  <Header/>

   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    <Footer />
    </div>
      
    
  )
}

export default App
