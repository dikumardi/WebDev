import { useNavigate } from "react-router-dom"

const Service = () => {

  const navigate = useNavigate();
  const NavigateHandler = (name)=> {
    navigate(`/service/det/${name} ` )
   console.log(name);
   
  }

  

  return (
    <div className="mx-[20%] mt-5">
    <div className='w-[200px] h-[150px] border rounded  mt-3 mx-70  '>
    <h1 className='text-3xl font-thin px-5 py-3 mt-5 mx-4'>SER 1</h1>
    <button
    onClick={()=>NavigateHandler("Service 1")}
     className='bg-zinc-700 rounded px-5 py-3 mx-10'>view more  </button>    
   </div>
    <div className='w-[200px] h-[150px] border rounded  mt-3 mx-70  '>
    <h1 className='text-3xl font-thin px-5 py-3 mt-5 mx-4'>SER 2</h1>
    <button     
    onClick={()=>NavigateHandler("Ser 2")}
 className='bg-zinc-700 rounded px-5 py-3 mx-10'>view more  </button>    
   </div>
    <div className='w-[200px] h-[150px] border rounded  mt-3 mx-70'>
    <h1 className='text-3xl font-thin px-5 py-3 mt-5 mx-4'>SER 3</h1>
    <button   
    onClick={()=>NavigateHandler(" serv Product 3")}
    className='bg-zinc-700 rounded px-5 py-3 mx-10'>view more  </button>    
   </div>
    </div>
  )
}

export default Service