import axios from 'axios';
import React from 'react'

const Home = () => {

  const getproduct = async ()=>{
    try {
      //
      // const response =await axios.get("https://fakestoreapi.com/products")
      // console.log(response);
      
      const strdata = fetch("https://fakestoreapi.com/products")
      const jsondata = (await strdata).json();
      console.log(jsondata);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
    <h1>Home</h1>
    <button onClick={getproduct}>Get Products</button>
    </div>
  )
}

export default Home