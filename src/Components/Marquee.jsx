// import React, { useState } from 'react'

// const Marquee = () => {

//   const [search,setSearch]=useState("")
//   const [todo,setTodo]=useState([])

//   const addButton = () => {
//      if(search.trim()=="") return
//      setTodo([...todo,search])
//      setSearch("")
//   }

//   const clearAll = () =>{
//     setTodo([])
//   }

//   const deletetask = (index) =>{
//     const update = todo.filter((_,i)=>i !==index)
//     setTodo(update)

//   }
//   return (
//   <section className=' flex justify-center items-center space-x-3 h-screen bg-gradient-to-r from-blue-600 to-blue-400 via-blue-700 flex-col'>
//     <div className=' font-bold text-2xl text-white'>
//       <h1>TODO APP</h1>
//     </div>

//     <div className=' space-x-3'>
//       <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Entre Task' className=' bg-white border-3  focus:outline-blue-600 border-gray-400 py-1 px-5 mt-2 rounded-lg w-70'/>
//       <button onClick={addButton} className=' bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 cursor-grab  text-white font-bold font-sans shadow-black shadow-2xs'>Add</button>
//       <button onClick={clearAll} className=' bg-white px-3 py-1 rounded-lg font-bold font-sans hover:bg-gray-200 cursor-grab'>Clear All</button>
//     </div>
    
//     <ul className=' flex flex-col mt-3 gap-2 border p-3 border-gray-500 shadow-gray-800 bg-white rounded-lg shadow-lg h-100 overflow-y-auto'>
//       {
//       todo.map((todo,index)=>(
//         <li key={index} className='bg-gray-100 border shadow-2xs shadow-gray-600 font-medium text-gray-900  px-10 rounded-lg w-2xl py-2 flex items-center border-gray-200 justify-between'>
//           <span>{todo}</span>
//           <div className=' flex space-x-7'>
//           <button onClick={()=> deletetask(index)} className=' bg-red-500 rounded-lg p-1 text-white font-bold font-sans cursor-grab hover:bg-red-600 shadow-2xs shadow-black'>Delete</button>
//           <button><i className='fa fa-pencil text-blue-500 text-shadow-md text-shadow-gray-900'></i></button>
//           </div>
//         </li>
//       ))}
//     </ul>
//     {/* secound container  */}
//     <ul className='flex flex-col mt-3 gap-2 border p-3 border-gray-500 shadow-gray-800 bg-white rounded-lg shadow-lg h-100 overflow-y-auto'>
//       <li>
//         <span></span>
//       </li>
//     </ul>
//   </section>
//   )
// }

// export default Marquee





import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/todos";

export default function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch all todos
  const getTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Create todo
  const addTodo = async () => {
    if (!title) return;

    await axios.post(API, { title });
    setTitle("");
    getTodos();
  };

  // Toggle complete
  const toggleTodo = async (id, completed) => {
    await axios.put(`${API}/${id}`, { completed: !completed });
    getTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  }