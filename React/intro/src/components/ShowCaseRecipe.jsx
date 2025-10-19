import  { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';

const ShowCaseRecipe = () => {
  
    
  const { data } = useContext(recipecontext);

    const renderrecipes = data.map((recipe) => (
           <RecipeCard key={recipe.id} recipe={recipe}/>
    ));

    return <div className='flex flex-wrap px-17 mt-7'>
    {data.length > 0 ? renderrecipes : "No recipes found"}</div>;

};

export default ShowCaseRecipe;
