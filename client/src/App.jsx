import React from 'react'
import Login from './Auth/Login'
import Register from './Auth/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
     
    </BrowserRouter>
  </>
);
  
}

export default App