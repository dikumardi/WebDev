import { Fragment } from "react";

const Read = (props) => {
    const todos =props.todos;
    const settodos = todos.settodos

    
 const RenderView =todos.map(todo=>{
  return <li style={{color: todo.isCompleted ? "green" : "red"}} key={todo.id}>{todo.title}</li>
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