import { Link } from "react-router-dom";

const RecipeCard = (props) => {

        const 
        {id,image,title,desc,chef} =props.recipe;

  return (
     <Link to={`/recipe/details/${id}`} 
    className="duration-350 hover:scale-110 mr-7 mb-17  w-[20vw] rounded overflow-hidden block shadow  ">
    <img 
    className="w-full h-[20vh] object-cover block "
    src={image} />
    <h1 className="text-center text-xl font-bold mt-3  text-red-700">{title}</h1>
    <small className=" block text-center text-lg font-bold  ">{chef}</small>
    <p className="text-center p-3">{desc.slice(0,170)}... <small className="text-blue-400">More</small></p>
    </Link>
  )
}

export default RecipeCard