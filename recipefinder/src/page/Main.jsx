import React, { useEffect, useState } from 'react';
import './Main.css';
import FoodCard from '../component/FoodCard';
import FoodDetail from './FoodDetail';
import { toast } from 'react-toastify';

function Main() {
  const YOUR_APP_ID = '80c175f9';
  const YOUR_APP_KEY = '33f8f717e04978f64e2dabdc54c1e4ec';

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [display, setDisplay] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const defaultQueries = ['chicken', 'salmon', 'vegetarian'];

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const responses = await Promise.all(
        defaultQueries.map(query =>
          fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
          ).then(res => res.json())
        )
      );
      const allRecipes = responses.flatMap(data => data.hits);
      setRecipes(allRecipes);
      setDisplay(false);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
    setIsLoading(false);
  };

  const closeHandler = () => {
    setRecipeDetails(null);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const getHandler = async () => {
    try {
      if (query === '') {
        toast.error('Enter a Dish Name');
        return;
      }
      setIsLoading(true);
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );
      const data = await response.json();

      if (data.hits.length === 0) {
        toast.warning('No recipes found for this query. Please try again.');
        setDisplay(true);
        setRecipes([]);
        return;
      }
      setRecipes(data.hits);
      setDisplay(true);
      toast.success('Data Fetched Successfully!');
    } catch (error) {
      console.error('Error fetching the data:', error);
      toast.error('Something went wrong. Please try again later.');
    }
    setIsLoading(false);
  };

  const handleGetRecipe = index => {
    setRecipeDetails(recipes[index]);
  };

  return (
    <>
      <div className='header-div'>
        <input
          type='text'
          value={query}
          placeholder='Enter Name'
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={getHandler} className='search-button' disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {display && (
        <h1 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
          You Searched for {query}
        </h1>
      )}

      <div
        className='food-div'
        style={{
          backgroundColor: recipeDetails ? 'grey' : 'lightcoral',
          opacity: recipeDetails ? '0.5' : '1',
          pointerEvents: recipeDetails ? 'none' : 'auto',
        }}
      >
        {recipes.map((recipe, index) => (
          <FoodCard
            key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories.toFixed(2)}
            getRecipe={() => handleGetRecipe(index)}
          />
        ))}
      </div>

      {recipeDetails && (
        <div className='overlay'>
          <div className='recipe-details-container'>
            <button className='close-button' onClick={closeHandler}>×</button> {/* Close button */}
            <FoodDetail
              title={recipeDetails.recipe.label}
              image={recipeDetails.recipe.image}
              calories={recipeDetails.recipe.calories.toFixed(2)}
              ingredients={recipeDetails.recipe.ingredients.map(ingredient => ingredient.text)}
              closeHandler={closeHandler}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
