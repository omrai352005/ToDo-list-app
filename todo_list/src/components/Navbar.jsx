import React, { useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
 
  const[aboutus , setaboutus] = useState(true); 
  const handleaboutus=(e)=>{
    setaboutus(!aboutus)
  }
  return (
    <div className='bg-violet-400 flex items-center justify-between p-2 '>
      <ul className='flex items-center text-3xl font-extrabold '>
        <li >iTask</li>
      </ul>
      <ul className='flex items-center gap-4  '>
        <li className='hover:font-bold hover:cursor-pointer'>Home</li>
        <li onClick={handleaboutus} className='hover:font-bold hover:cursor-pointer'>About us</li>

      </ul>
      
      <div className={` absolute   bg-white rounded-2xl p-4  top-[10vh] rigth-[20vh] left-[20vh]  
        flex flex-col shadow-xl/30 ${aboutus ?'hidden':""}`}> 
       <div className="flex justify-evenly">
        <div></div>
       <h1 className='flex justify-center w-[80%] text-2xl font-bold underline'>About Us</h1>
       <button onClick={handleaboutus} className='text-2xl font-bold hover:text-violet-500'><IoCloseCircleSharp /></button>
       </div>
       
        <div className="my-1">Welcome to our To-Do List App — a simple, efficient, and user-friendly productivity tool built using React.

        </div>
        <div className="my-1">Our app is designed to help you stay organized and on track with your daily tasks. Whether it's managing work assignments,
          personal goals, or everyday chores, this tool provides a clean interface and essential features like adding, editing,
          and deleting tasks with ease.</div>
        <div className="my-1">We believe that task management should be intuitive and clutter-free. That’s why this app focuses on the core essentials
          without unnecessary distractions. It’s fast, lightweight, and responsive — perfect for use on desktop or mobile devices.</div>
          <div className="my-1">This project was built as a learning and productivity enhancer, with a focus on real-world usability and modern front-end
        development practices using React and localStorage for persistent state.</div>
      <div className="my-1">Thank you for using our app — we hope it helps you get more done, one task at a time!</div> 
      </div>
      

    </div>


  )
}

export default Navbar
