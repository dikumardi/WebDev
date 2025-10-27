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
      <div className='bg-red-500'>App</div>
    )
  }

  export default App