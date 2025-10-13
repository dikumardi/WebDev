import { useState } from "react";
import { nanoid } from "nanoid";



const Create = (props) => {
  const todos =props.todos;
  const settodos =props.settodos;

      const [title, settitle] = useState("")

      const submitHandler = (e)=> {
       e.preventDefault();
      

      const newTodo = {
        id: nanoid(),
        title ,
        isCompleted:"false"
      };

      const copytodo =[...todos];
      copytodo.push(newTodo);
      settodos(copytodo);
      settitle("")
};

const allClear = () => {
  settodos([]);
}

  return (
    <div className="w-[60%] bg-gray-700 text-white p-8 border rounded mb-10 ">
  <h1 className="text-5xl mb-4">
    <span className="text-purple-700">Create</span> New Task
  </h1>

  <form onSubmit={submitHandler} className="mb-6">
    <input
      className="mb-4 p-2 rounded  w-full border-b font-thin  outline-0 "
      onChange={(e) => settitle(e.target.value)}
      value={title}
      placeholder="Enter Title"
      type="text"
    /> <br/>

    <button className="border  bg-blue-700 px-7 py-2 rounded mx-3 ">Add Task</button>
    <button
      className="border bg-red-700 px-7 py-2 rounded"
      type="button"
      onClick={allClear}
    >
      All Clear
    </button>
  </form>

   {/* Instruction Section */}
  <div className="bg-gray-800 p-4 rounded mt-6">
  <h1 className="text-3xl">NOTE</h1>
    <h2 className="text-2xl mb-2 text-purple-400">How to Use This Todo App</h2>
    <p className="text-white font-light leading-relaxed">
      1. Enter the title of your task in the "Enter Title" input field. <br/>
      2. Optionally, write a short note about what the task is about. <br/>
      3. Click the "Add Task" button to save your task. <br/>
      4. Use the "All Clear" button to remove all tasks at once. <br/>
      5. Review your tasks and complete them as needed. <br/>
      6. Click "Delete" on a task to remove it individually. <br/>
      7. Click "Delete" on a task to remove it individually.
    </p>
  </div>

</div>

  )
}

export default Create