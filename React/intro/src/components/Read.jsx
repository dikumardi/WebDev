import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper';

const Read = () => {

  const [todos, settodos]= useContext(todocontext)
  

   

    const deleteHandler = (id) =>{
    const filteredTodos =todos.filter((todo) => todo.id !=id)
    toast.error("Deleted task")
    settodos(filteredTodos)
  };
 
  const RenderList = todos.map(todo=>{
    return(
      <li
       className="flex justify-between bg-gray-600 mb-5 p-2 rounded"
       key={todo.id}>{todo.title} 
       
      <button   
      
      className="border bg-red-700 px-7 py-2 rounded"
      onClick={()=>deleteHandler(todo.id)}>Delete</button>
      </li>
    );
  });


     
  return (
    <div className="w-[60%] bg-gray-700 text-white p-8 border rounded mb-10 ">
        <h1 className='text-5xl mb-4'>Pending Task </h1>
        <ol>{RenderList}</ol>

    </div>
  )
}

export default Read