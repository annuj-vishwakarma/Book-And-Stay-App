import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
 //building responsive Registerpage
const Register = () => {

   const redirectToLogin = () => {
      
   };

   const registerUser = () => {
     
   };

   return (
    <div class='lg:flex lg:items-start'>
    <div class='hidden lg:block w-1/2 h-screen relative'>
      <img src="https://wallpapercave.com/wp/wp10344365.jpg" class='w-full h-full object-cover' />
      <div class='absolute top-[20%] left-[10%] flex flex-col'>
        <h1 class='text-4xl lg:text-6xl text-white font-bold my-4'>Create an Account</h1>
        <p class='text-xl lg:text-2xl text-white font-normal'>Join our community today!</p>
      </div>
    </div>
    <div class='w-full h-screen lg:w-1/2 bg-[#f5f5f5] flex flex-col p-5 lg:p-20 justify-between'>
      <h1 class='text-xl lg:text-2xl text-[#060606] font-semibold'>Register</h1>
  
      <div class='w-full flex flex-col'>
        <div class='w-full flex flex-col mb-5 lg:mb-10'>
          <h3 class='text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4'>Create Account</h3>
          <p class='text-base lg:text-lg mb-2'>Please fill in your information to register.</p>
        </div>
  
        <form id="registerForm">
          <div class='w-full flex flex-col'>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              class='w-full bg-[#E8F0FE] text-black p-2 py-2 my-2 bg-none border-black outline-none focus:outline-none'
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              class='w-full text-black bg-[#E8F0FE] p-2 py-2 my-2 bg-none border-black outline-none focus:outline-none'
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Confirm Password'
              class='w-full text-black bg-[#E8F0FE] p-2 py-2 my-2 bg-none border-black outline-none focus:outline-none'
            />
            <select id="role" name="role" class="w-full text-black p-2 py-2 my-2 bg-none border-black bg-[#E8F0FE] outline-none focus:outline-none">
              <option className='text-black' value="" disabled selected>Select Role</option>
              <option value="client">Client</option>
              <option value="user">User</option>
            </select>
            <div class='w-full flex flex-col my-4'>
              <button type="button" onClick={registerUser} class='w-full text-white my-2 bg-[#060606] rounded-md p-3 lg:p-4 text-center items-center justify-center'>Register</button>
            </div>
          </div>
        </form>
        <div class='w-full flex items-center justify-center'>
          <p class='text-base lg:text-lg font-normal text-[#060606] p-2'>Already have an account? <Link to="/Login" onClick={redirectToLogin} class='font-semibold underline underline-offset-2 cursor-pointer'>Log in here!</Link></p>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default Register;
