import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";



const Create = () => {
   const [todos, settodos]= useContext(todocontext)
 
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{ 
    console.log(data)

      const newTodo = {
        id: nanoid(),
        title:data.exampleRequired ,
        isCompleted:"false"
      };

      const copytodo =[...todos];
      copytodo.push(newTodo);
      settodos(copytodo);

      toast.success("Todo Added")
      reset();
};

const allClear = () => {
        toast.success("List Clear")

  settodos([]);
}

  return (
    <div className="w-[60%]  bg-gray-700 text-white p-8 border rounded mb-10 ">
  <h1 className="text-5xl mb-4">
    <span className="text-purple-700">Create</span> New Task
  </h1>

  <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
    <input
      className="mb-4 p-2 rounded  w-full border-b font-thin  outline-0 "
      {...register("exampleRequired", { required: true })} 
      placeholder="Enter Title"
      type="text"
    />
          {errors.exampleRequired && <span className="text-red-500">This field is required</span>}

     <br/>

    <button className="border  bg-blue-700 px-7 py-2 rounded mx-3 ">Add Task</button>
    <button
      className="border bg-red-700 px-7 py-2 rounded"
      type="button"
      onClick={allClear}
    >
      All Clear
    </button>
  </form>


</div>

  )
}

export default Create