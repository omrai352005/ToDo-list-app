import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import './App.css'
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showtask, setshowtask] = useState(false)

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)

    }
  }, [])


  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleChange = (e) => {
    settodo(e.target.value);

  }
  const handleAdd = (e) => {
   if(todo.length>3){ settodos([...todos, { id: uuidv4(), todo, iscomplete: false }])
    settodo("");
    console.log(todos)
    savetoLS()}

  }
  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodo = [...todos]
    newtodo[index].iscomplete = !newtodo[index].iscomplete
    settodos(newtodo)
    savetoLS()
  }
  const handleDelete = (e) => {
    if (confirm("Delete task permanently")) {
      let id = e.target.name;
      let newtodo = todos.filter(item => {
        return item.id !== id;
      })
      //  
      settodos(newtodo)
      savetoLS()
    }

  }
  const handleEdit = (e) => {
   
    let id = e.target.name;

    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodo = [...todos]
    settodo(newtodo[index].todo)

    let nt = todos.filter(item => {
      return item.id !== id;
    })
    //  
    settodos(nt)
    savetoLS()

  }
  const handleshowtask = (e) => {

    setshowtask(!showtask)
  }
  const handledelteall = () => {
    if (confirm("Delelte completed task permanently  ")) {
      let newtodo = todos.filter(item => {
        return item.iscomplete === false;
      })
      //  
      settodos(newtodo)
      savetoLS()
    }

  }
  // 
  return (
    <>
      <Navbar />
      <div className="container max-w-[120vh] mx-auto  bg-violet-200 md:rounded-4xl min-h-screen p-5">
        <div className="text-4xl font-bold flex justify-center"> iTask - your own task manager</div>
        <div className="upper flex flex-col items-center  m-4 rounded-4xl p-2">
          <h1 className='text-xl m-2'>Add a task here !</h1>
          <div className=' upper-box flex justify-center w-[90%]'>
            <input onChange={handleChange} type="text" placeholder='task' className=' w-[70%] bg-white  text-black px-2 ' value={todo} />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='p-1  mx-5 hover:cursor-pointer disabled:bg-violet-400 bg-violet-500 hover:bg-violet-800 text-lg text-white rounded-md '>Save</button>
          </div>
        </div>
        <div className="middle flex justify-center">
          <button onClick={handleshowtask} className='p-1 md:h-9  mx-5 hover:cursor-pointer disabled:bg-violet-400 bg-violet-500 hover:bg-violet-800 text-lg text-white rounded-md '>{showtask ? "show completed task" : "hide completed task "}</button>
          <div className='flex flex-col items-center group '>
            <button onClick={handledelteall} className='p-1 mx-5 w-1/2 flex justify-center hover:cursor-pointer disabled:bg-violet-400 bg-violet-500 hover:bg-violet-800 text-lg text-white rounded-md '><MdOutlineDeleteSweep /> </button>
            <div className=' bg-white rounded-2xl flex flex-col opacity-0 group-hover:opacity-100 mx-5 p-2 gap-2'>delete all completed task </div>
          </div>
        </div>
        <div className="lower flex flex-col items-center">
          <h1 className='text-xl m-2'>Your ToDo's</h1>
          {todos.map(item => {
            return <div key={item.id} className={`task flex justify-between w-3/4 m-2 ${showtask && item.iscomplete ? 'hidden' : ""}`} >
              <div className={item.iscomplete ? "line-through flex" : "flex"} >
                <input name={item.id} type="checkbox" value={item.iscomplete} onChange={handlecheckbox} className='mx-4' />
                <div className=" flex flex-wrap  ">{item.todo}</div>
              </div>
              <div className="button flex gap-3 ">
                <button name={item.id} onClick={handleEdit} className='p-3  h-10 hover:cursor-pointer bg-violet-500 hover:bg-violet-800 text-lg text-white rounded-md '> <FaRegEdit /> </button>
                <button name={item.id} onClick={handleDelete} className='p-3  h-10 hover:cursor-pointer bg-violet-500 hover:bg-violet-800 text-lg text-white rounded-md '><MdDelete /> </button>
              </div>
            </div>
          })}



        </div>
      </div>
    </>
  )
}

export default App
