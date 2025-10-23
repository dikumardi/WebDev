import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  const recip = data.find((rec) => params.id == rec.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recip?.title || "",
      chef: recip?.chef || "",
      image: recip?.image || "",
      inst: recip?.inst || "",
      desc: recip?.desc || "",
      ingredients: recip?.ingredients || "",
      category: recip?.category || "breakfast",
    },
  });

  const UpdatetHandler = (recipe) => {
    const index = data.findIndex((r) => r.id == params.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("Recipe updated");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));
    toast.success("Recipe deleted");
    navigate("/showcaserecipe");
  };

  if (!recip) return "Loading...";

  // Favourite State
  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  //  Add to favourite
  const FavHandler = () => {
    const alreadyFav = favourite.find((f) => f.id == recip?.id);
    if (alreadyFav) return toast.info("Already in favourites");

    const copyfav = [...favourite, recip];
    setfavourite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Added to favourites ❤️");
  };

  // Remove from favourite
  const UnFavHandler = () => {
    const filterfav = favourite.filter((f) => f.id != recip?.id);
    setfavourite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    toast.info("Removed from favourites 💔");
  };

  useEffect(() => {
    console.log("singleRecipe.jsx mounted");
    return () => {
      console.log("singleRecipe.jsx unmounted");
    };
  }, []);

  const isFavourite = favourite.find((f) => f.id == recip?.id);

  return (
    <div className="w-full flex px-10">
      <div className="relative left w-1/2 p-8">
        {isFavourite ? (
          <i
            onClick={UnFavHandler}
            className="absolute right-[5%] text-3xl text-red-500 ri-poker-hearts-fill cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="absolute right-[5%] text-3xl text-gray-400 ri-poker-hearts-line cursor-pointer"
          ></i>
        )}

        <h1 className="text-center text-5xl text-red-700 mt-4">
          {recip.title}
        </h1>

        {recip.image ? (
          <img className="w-[20vw] my-4" src={recip.image} alt={recip.title} />
        ) : (
          <img
            className="w-[20vw] my-4"
            src="https://via.placeholder.com/400x200?text=No+Image"
            alt="No image"
          />
        )}

        <h2 className="text-xl font-semibold">{recip.chef}</h2>
        <p className="bg-red-100 p-3 rounded mt-3">{recip.desc}</p>
      </div>

      <div className="right pl-10 mt-10 p-2 w-1/2">
        <form className="w-full" onSubmit={handleSubmit(UpdatetHandler)}>
          <input
            className="block border-b outline-0 p-2 mb-2"
            {...register("image")}
            type="url"
            placeholder="Enter Image URL"
          />

          <input
            className="block border-b outline-0 p-2 mb-2"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />

          <input
            className="block border-b outline-0 p-2 mb-2"
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
          />

          <textarea
            className="block border-b outline-0 p-2 mb-2"
            {...register("desc")}
            placeholder="// Start from here"
          ></textarea>

          <textarea
            className="block border-b outline-0 p-2 mb-2"
            {...register("ingredients")}
            placeholder="// Write ingredients separated by commas"
          ></textarea>

          <textarea
            className="block border-b outline-0 p-2 mb-2"
            {...register("inst")}
            placeholder="// Write instructions separated by commas"
          ></textarea>

          <select
            className="block border-b outline-0 p-2 mb-4"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

          <button
            type="submit"
            className="text-white mt-5 block bg-blue-900 px-4 py-2 rounded"
          >
            Update Recipe
          </button>

          <button
            type="button"
            onClick={DeleteHandler}
            className="text-white mt-5 block bg-red-900 px-4 py-2 rounded"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
