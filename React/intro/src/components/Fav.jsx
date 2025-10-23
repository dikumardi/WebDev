import  { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';

const Fav = () => {
  
    
  const favourite = JSON.parse(localStorage.getItem("fav") || []) ;

    const renderrecipes = favourite.map((recipe) => (
           <RecipeCard key={recipe.id} recipe={recipe}/>
    ));

    return <div className='flex flex-wrap px-17 mt-7'>
    {favourite.length > 0 ? renderrecipes : "No recipes found"}</div>;

};

export default Fav;
