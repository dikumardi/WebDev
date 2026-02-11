import React from 'react'
import { fetchGIF, fetchPhotos } from './api/MediaApi'

const App = () => {

 
  return (
    <div>
    
    <button onClick={()=>{
      fetchPhotos("cat")
    }} 
    className='bg-emerald-700 m-5'>Get Photos</button>

    <button onClick={()=>{
      fetchPhotos("cat")
    }} 
    className='bg-emerald-700 m-5'>Get Videos</button>

    <button onClick={async()=>{
     let  data = await fetchGIF("cat")
     console.log(data.results);
     
    }} 
    className='bg-emerald-700 m-5'>Get Gif</button>
    </div>
  )
}

export default App