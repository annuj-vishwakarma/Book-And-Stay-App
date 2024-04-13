import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const login = () => {
  
  return (
    <div class='lg:flex lg:items-start'>
    <div class='hidden lg:block w-1/2 h-screen relative'>
      <img src="https://wallpapercave.com/wp/wp10344365.jpg" class='w-full h-full object-cover' />
      <div class='absolute top-[20%] left-[10%] flex flex-col'>
        <h1 class='text-4xl lg:text-6xl  text-white font-bold my-4'>Discover your new  <br /> favourite stay</h1>
        <p class='text-xl text-white font-normal'>Start for free and get attractive offers from the community</p>
      </div>
    </div>
    <div class='w-full h-screen lg:w-1/2 bg-[#f5f5f5] flex flex-col p-5 lg:p-20 justify-between'>
      <h1 class='text-xl  text-[#060606] font-semibold pt-4'>Interactive brand</h1>
  
      <div class='w-full flex flex-col'>
        <div class='w-full flex flex-col mb-5 lg:mb-10'>
          <h3 class='text-2xl lg:text-3xl font-semibold mb-2 pt-6'>Login</h3>
          <p class='text-base  -mb-6'>Welcome back! Please enter your details.</p>
        </div>
  
        <div class='w-full flex flex-col '>
          <input
            type="email"
            placeholder='Email'
            class='w-full bg-[#E8F0FE] text-black p-2 py-2 my-2 bg-none border-black outline-none focus:outline-none'
          />
          <input
            type="password"
            placeholder='Password'
            class='w-full bg-[#E8F0FE] text-black p-2 py-2 my-2 bg-none border-black outline-none focus:outline-none'
          />
         
        
          <div class='w-full flex items-center justify-between'>
            <div class='w-full flex items-center'>
              <input type="checkbox" class='w-4 mr-2' />
              <p class='text-base '>Remember me for 30 days</p>
            </div>
            <p class='text-base  font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forget Password</p>
          </div>
          <div class='w-full flex flex-col my-4'>
            <button type="button" onclick="loginUser()" class='w-full text-white my-2 bg-[#060606] rounded-md p-3 lg:p-4 text-center items-center justify-center'>Log in</button>
            <Link className='w-full text-[#060606]  my-2 border-2 border-black rounded-md p-3 lg:p-4 text-center items-center justify-center' to={"/"}>Register Now</Link>
          </div>
          <div class='w-full flex items-center justify-center relative py-2'>
            <div class='w-full h-[1px] bg-black mt-6'></div>
            <p class='text-lg lg:text-xl absolute text-[#060606]/80 bg-[#f5f5f5] p-1 mt-3 '>or</p>
          </div>
        </div>
        <div class='w-full flex items-center justify-center mt-8'>
          <p class='text-base  font-normal text-[#060606] p-2'>Don't have an account? <a href="/" class='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free!</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default login