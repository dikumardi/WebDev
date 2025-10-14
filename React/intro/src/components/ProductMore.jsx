import { useNavigate } from 'react-router-dom';

const ProductsDetails = () => {
      const navigate = useNavigate();

  return (
    <div >
    <h1 className='text-5xl mb-5'>More Product 1</h1>
    <h2 className='text-3xl mb-5 text-thin'>comming soon  Details</h2>
    <button
    onClick={()=>navigate(-1)}
    className='bg-gray-700 px-7 py-2 rounded text-white mx-3'>Go Back </button>

       <button
    onClick={()=>navigate("/service")}
    className='bg-gray-700 px-7 py-2 rounded text-white mb-3'>Go to  Service</button>
    
    </div>
  )
}

export default ProductsDetails