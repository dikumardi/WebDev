import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import  { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
     const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe]);
        reset();
    };



    return (
    <div className="max-w-xl mx-auto mt-3 p-6 bg-white shadow rounded">
      <h1 className="text-center text-2xl font-bold mb-6">Create a Recipe</h1>
      
      <form 
       onSubmit={handleSubmit(SubmitHandler)}
      className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="title">
            Title
          </label>
          <input
           {...register("exampleRequired" )}
            type="text"
            id="title"
            placeholder="Enter recipe title"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
           {...register("ingredients")}
            id="ingredients"
            placeholder="Enter ingredients, separated by commas"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="steps">
            Steps
          </label>
          <textarea
           {...register("steps")}
            id="steps"
            placeholder="Enter cooking steps"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="cookingTime">
            Cooking Time (minutes)
          </label>
          <input
            type="number"
             {...register("CookingTime")}
            id="cookingTime"
            placeholder="Enter time in minutes "
            className="w-full  border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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