import Home from '../components/Home'
import Products from '../components/Products'
import Service from '../components/Service'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'
import ProductsDetails from '../components/ProductsDetails'
import ProductMore from '../components/ProductMore'
import ServiceDetails from '../components/ServiceDetails'

const Mainroute = () => {
  return (
    
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/product" element={<Products/>}> 
          <Route path="/product/detail" element={<ProductsDetails/>}/>
          <Route path="/product/more" element={<ProductMore/>}/>
     </Route>
     
     <Route path="/service" element={<Service/>}/>
     <Route path="/service/det/:name" element={<ServiceDetails/>}/>
     <Route path="/about" element={<About/>}/>
     </Routes>
    
  )
}

export default Mainroute