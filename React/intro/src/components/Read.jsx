import { Fragment } from "react";

const Read = (props) => {
    const todos =props.todos;
    const settodos = props.settodos

  const deletHandler = (id) =>{
   console.log(id);
  const filtersTodos = todos.filter((todo)=>todo.id !=id)
  settodos(filtersTodos);
 
  }
    
 const RenderView =todos.map(todo=>{
  return (
    <li 
    style={{color: todo.isCompleted ? "green" : "red"}}
     key={todo.id}>{todo.title} |{" "}
      <span 
      onClick={()=>deletHandler(todo.id)}
      style={{color:"slateblue"}}>Delete</span>
      </li>
  )
  });

  return (
    <Fragment>
       <hr/>
    <h1 style={{color:"tomato"}}>Task List</h1>
    <ol>{RenderView}</ol>

    </Fragment>
  )
}

export default Read