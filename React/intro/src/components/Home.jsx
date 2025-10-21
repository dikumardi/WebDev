import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const getproduct = async ()=>{
    try {
      //
      // const response =await axios.get("https://fakestoreapi.com/products")
      // console.log(response);
      
      // const strdata = fetch("https://fakestoreapi.com/products")
      // const jsondata = (await strdata).json();
      // console.log(jsondata);

      const response = await axios.get("/products")
      console.log(response.data);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }


 useEffect(()=>{
  console.log("Home.jsx mounted");
  getproduct();
   return()=>{
    console.log("Home.jsx un mounted");
    
   }
 })

  return (
    <div>
    <h1>Home</h1>
    <button onClick={getproduct}>Get Products</button>
    </div>
  )
}

export default Home