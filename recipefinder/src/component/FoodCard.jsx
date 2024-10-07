import React from 'react';
import '../component/FoodCard.css'

function FoodCard(props) {
  return (
    <div className="food-card">
      <img className="food-card-image" src={props.image} alt={props.title} />
      <div className="food-card-content">
        <h2 className="food-card-title">{props.title}</h2>
        <p className="food-card-calories">Calories: {props.calories}</p>
        <button className="food-card-button" onClick={props.getRecipe}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
