import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import  { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
    const navigate = useNavigate();

     const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();

        const copydata = [...data]
        copydata.push(recipe)
        localStorage.setItem("recipe",JSON.stringify(copydata));
        


        // setdata([...data, recipe]);
        reset();
        toast.success("Recipe created");
            navigate("/showcaserecipe")

    };



    return (
    <div className="max-w-xl mx-auto mt-3 p-6 bg-white shadow rounded">
      <h1 className="text-center text-2xl font-bold mb-6">Create a Recipe</h1>
      
      <form 
  onSubmit={handleSubmit(SubmitHandler)}
  className="space-y-4"
>


  {/* Image URL */}
  <div>
    <label className="block font-semibold mb-1" htmlFor="imageUrl">
      Image URL
    </label>
    <input
      {...register("image")}
      type="url"
      id="imageUrl"
      placeholder="Enter recipe image URL"
      className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  
  {/* Recipe Name */}
  <div>
    <label className="block font-semibold mb-1" htmlFor="name">
      Recipe Name
    </label>
    <input
      {...register("title")}
      type="text"
      id="name"
      placeholder="Enter recipe name"
      className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>


  {/* State */}
  <div>
    <label className="block font-semibold mb-1" htmlFor="state">
      State
    </label>
    <input
      {...register("chef")}
      type="text"
      id="state"
      placeholder="Enter state name"
      className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Famous Dish Description */}
  <div>
    <label className="block font-semibold mb-1" htmlFor="description">
       Dish Description
    </label>
    <textarea
      {...register("desc")}
      id="description"
      placeholder="Write a short description about the dish"
      className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    ></textarea>
  </div>



  <div className="text-center mt-7">
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Submit Recipe
    </button>
  </div>
</form>

    </div>
  );
}

export default Recipe