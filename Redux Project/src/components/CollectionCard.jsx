import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../Redux/features/CollectionSlice'

const CollectionCard = ({item}) => {
     const dispatch = useDispatch()

     const removeFromCollection = (item)=>{
      dispatch(removeCollection(item.id))
     }

  return (
    
    <div>
    <div 
     className='w-96 h-96 bg-amber-300 rounded relative'
     >
     <a target="_blank" href={item.url} className=" h-full">

     {item.type == 'photo'?
      <img className="h-full w-full object-cover object-center "
       src={item.src} alt="" /> : '' }

     {item.type == 'video'? <video
       className="h-full w-full  object-cover object-center " 
      src={item.src}></video>:"" }

     {item.type == 'GIFs'?<img
       className="h-full w-full object-cover object-center " 
      src={item.src} alt="" /> : " "}
     </a>

    {
    <div id="bottom"  
    className="flex justify-between items-center w-full px-7 py-10 text-white absolute bottom-0"
    >
    <h2 
    className="text-lg font-semibold capitalize"
    >item.title</h2>
    <button 
    onClick={()=>{removeFromCollection(item)}}
    className="bg-blue-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95"
    >Remove</button>
    </div>
    }
    </div>
    </div>
  )
}

export default CollectionCard