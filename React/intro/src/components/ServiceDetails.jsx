import { use } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ServiceDetails = () => {
   const navigate = useNavigate();
     const param = useParams();
     console.log(param);
     
  return (
    <div>
        <h1 className='text-5xl mb-5'>{param.name}</h1>
    <h2 className='text-3xl mb-5 text-thin'>Product Details</h2>
    <button
    onClick={()=>navigate(-1)}
    className='bg-gray-700 px-7 py-2 rounded text-white mx-3'>Go Back </button>

   
    
    </div>
  )
}

export default ServiceDetails