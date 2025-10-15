import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10  bg-zinc-700 p-7 text-white'>
     <NavLink 
     className={(e)=>(e.isActive ? "text-red-500" : " ")}
       to="/">Home</NavLink>
       
     <NavLink 
     className={(e) => (e.isActive ? "text-red-500" : "")}
     to="/product">Product</NavLink>

     <NavLink 
     className={(e) => (e.isActive ? "text-red-500" : "")}
     to="/service">Service</NavLink>

     <NavLink
     className={(e) => (e.isActive ? "text-red-500" : "")}
     to="/about">About</NavLink>

     <NavLink
     className={(e) => (e.isActive ? "text-red-500" : "")}
     to="/recipe">Create Recipe</NavLink>

      <NavLink
     className={(e) => (e.isActive ? "text-red-500" : "")}
     to="/showcaserecipe">Show Recipe</NavLink>
    </div>
  )
}

export default Nav
