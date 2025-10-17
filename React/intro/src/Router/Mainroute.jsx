import Home from '../components/Home'
import Products from '../components/Products'
import Service from '../components/Service'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'
import ProductsDetails from '../components/ProductsDetails'
import ProductMore from '../components/ProductMore'
import ServiceDetails from '../components/ServiceDetails'
import Recipe from '../components/Recipe'
import ShowCaseRecipe from '../components/ShowCaseRecipe'
import SingleRecipe from '../components/SingleRecipe'

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
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/showcaserecipe" element={<ShowCaseRecipe/>}/>
               <Route path='/recipe/details/:id' element={<SingleRecipe />} />


     </Routes>
    
  )
}

export default Mainroute