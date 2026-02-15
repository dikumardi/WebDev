import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className=' p-5 bg-blue-500 items-center flex justify-between'>
    <h2 className='font-semibold'>MediaSearch</h2>
   
    <div className='flex gap-7 items-center justify-between text-xl'>
      <Link to='/'>Search</Link>
    <Link to='/collection'>Collection</Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar