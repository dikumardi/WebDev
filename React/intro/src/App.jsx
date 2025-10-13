import { nanoid } from "nanoid";
import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {


    const [todos, settodos] = useState([
     {id:1,title:"demo",isCompleted:true,}
    ]);

    



  return (
    <div className="flex w-screen h-screen bg-gray-800 text-white p-13 overflow-hidden">
    
    <Create todos={todos} settodos={settodos} />
    <Read todos={todos} settodos={settodos}/>
    
    </div>
  )
}

export default App