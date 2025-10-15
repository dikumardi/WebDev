import  { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';

const ShowCaseRecipe = () => {
  
    const { data } = useContext(recipecontext);

    const renderrecipes =data.map((recipe) => (
        <div key={recipe.id}>
            <h1>{recipe.title}</h1>
        </div>
    ));

    return(
         <div className="max-w-2xl mx-auto mt-10 space-y-6">
      {data.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Steps:</strong> {recipe.steps}</p>
          <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
        </div>
      ))}
    </div>
    )
    
    
    
    
};
export default ShowCaseRecipe;
