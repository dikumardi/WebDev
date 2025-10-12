import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
    const todos =props.todos;
    const settodos = props.settodos

       const [title, settitle] = useState("");
     const SubmitHandler = (e)=>{
      e.preventDefault();
         
      const newTodo ={
        id:nanoid(),
        title,
        isCompleted:true,
      };

       let copyTodo =[...todos];
       copyTodo.push(newTodo);
       settodos(copyTodo);   
       settitle("") 
     };
     const buttoncss = {
        margin:"20px 0",
      color : "black",
      padding: "5px 10px",
      backgroundColor:"royalblue",
      border:"1px solid red",
      borderRadius:"10px"
     };

  return (
    <>
     <h1>Create Task</h1>
    <form onSubmit={SubmitHandler}>
    <input
    onChange={(e)=>settitle(e.target.value)}
    value={title}
     type='text' placeholder='Enter Title'/> <br/>
     <button style={buttoncss}>Add Task</button>
    </form>
    </>
  )
}

export default Create