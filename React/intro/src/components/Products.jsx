import { Outlet, useNavigate } from "react-router-dom"

const Products = () => {
    const navigate = useNavigate();
    const navigateHandler = ()=> {
        navigate("/product/detail")
    }
  return (
    <div className='mx-[21em]'>
    <h1 className='text-5xl mb-5'>Product 1</h1>
    <button
    onClick={navigateHandler}
    className='bg-gray-700 px-7 py-2 rounded text-white mb-3 mx-3'>View more</button>

     <button
    onClick={()=>navigate("/product/more")}
    className='bg-gray-700 px-7 py-2 rounded text-white mb-3'>update</button>
    <hr className="w-[70%]"/>
    <Outlet/>
    </div>
  )
}

export default Products