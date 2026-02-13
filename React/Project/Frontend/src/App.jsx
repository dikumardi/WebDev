  import { useEffect } from 'react';
  import { asyncgetproducts } from "./store/userActions";
  import {useDispatch, useSelector} from "react-redux";

  const App = () => {

    const data = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(()=>{
    asyncgetproducts();
    },[])
    return (
      <div className='w-screen h-screen bg-gray-800 text-white'>App</div>
    )
  }

  export default App