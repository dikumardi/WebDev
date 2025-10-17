import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {};

  const params = useParams();
  const recip = data.find((recips) => params.id == recips.id);
  console.log(recip);

  return recip ? (

    <div className="w-full flex px-70">
      <div className="left  w-1/2 p-2">

        <h1 className="text-center text-5xl text-red-700"> {recip.title}</h1>
        <img className="W-[20vW]" src={recip.image} />

      </div>



      <div className="right pl-50 mt-10  p-2">

        <form className="w-1/2 " onSubmit={handleSubmit(SubmitHandler)}>
          <input
            className="block border-b outline-0 p-2"
            {...register("image")}
            type="url"
            value={recip.image}
            placeholder="Enter Image Url"
          />
          <small className="text-red-400">THis is how the error is shown</small>
          <input
            className="block border-b outline-0 p-2"
            {...register("title")}
            value={recip.title}
            type="text"
            placeholder="Recipe Title"
          />
          <input
            className="block border-b outline-0 p-2"
            {...register("chef")}
            type="text"
             value={recip.chef}
            placeholder="Chef Name"
          />

          <textarea
            className="block border-b outline-0 p-2"
            {...register("desc")}
                        value={recip.desc}
            placeholder="//start from here"
          ></textarea>

          <textarea
            className="block border-b outline-0 p-2"
            {...register("ingredients")}
            placeholder="//write ingredients seperated by comma"
          ></textarea>

          <textarea
            className="block border-b outline-0 p-2"
            {...register("instructions")}
            placeholder="//write instructions seperated by comma"
          ></textarea>

          <select
            className="block border-b outline-0 p-2"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="super">Super</option>
            <option value="dinner">Dinner </option>
          </select>

          <button className="text-white mt-5 block bg-blue-900 px-4 py-2 rounded">
            Update Recipe
          </button>

           <button className="text-white mt-5 block bg-red-900 px-4 py-2 rounded">
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
