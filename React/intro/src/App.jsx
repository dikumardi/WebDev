import { nanoid } from "nanoid";
import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {

  return (
    <div className="flex w-screen h-screen bg-gray-800 text-white p-13 overflow-hidden">
    
    <Create  />
    <Read />
    
    </div>
  )
}

export default App