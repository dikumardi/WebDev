import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

const App = () => {

  const [num, setnum] = useState()
 const dispatch = useDispatch()
 const count = useSelector((state)=>state.counter.value);

  return (
    <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
    
    <h1 className='px-55 mb-15 text-3xl'>{count}</h1>
   
      <div className="flex gap-7">
    <button
    onClick={()=>{dispatch(increment())}}
     className='bg-amber-600  px-17 text-lg rounded-2xl text-black'
     > + increment</button>
    <button
      onClick={()=>{
      dispatch(decrement())
    }}
     className='bg-amber-700 py-3 px-17 text-lg rounded-2xl text-black'
     > - decrement</button>
 <input type="number"
    value={num}
    onChange={(e)=>{setnum(e.target.value)}}
    placeholder='Enter Number' className='border rounded p-3 mb-2 ' />
      <button
      onClick={()=>{
     dispatch(incrementByAmount(Number(num)))
    }}
     className='bg-amber-700 py-3 px-17 text-lg rounded-2xl text-black'
     > Increment by Amount </button>
     </div>

     
  
    </div>
  )
}

export default App