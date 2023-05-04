import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import { Demo } from "./Commponent/Demo/Demo";
//import { Train } from "./Commponent/Train/Train"
//import { Hotel } from "./Commponent/Hotel/Hotel"
import { Home } from "./Commponent/Home/Home";
import { Login } from "./Commponent/Login";
import { SignUp } from "./Commponent/SignUp/SignUp";
import { Checkout } from "./Commponent/Checkout/Checkout"
import { Train } from "./Commponent/Train/Train";
import { Hotel } from "./Commponent/Hotel/Hotel"


export function App() {
 
   return (
<>
 <BrowserRouter>

 <Routes>
 <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  
  <Route path='/home' element={<Home/>}/>
  <Route path="/demo" element={<Demo/>}/>
  <Route path='/train' element={<Train/>}/>
  <Route path='/Hotel' element={<Hotel/>}/>
 <Route path='/checkout' element={<Checkout/>}/>

 
 </Routes>
 
</BrowserRouter>
 
 </>
  )
}

