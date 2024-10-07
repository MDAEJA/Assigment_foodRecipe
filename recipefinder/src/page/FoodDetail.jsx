import React from 'react';
import '../page/FoodDetail.css';

function FoodDetail({ title, image, calories, ingredients, instructions,closeHandler }) {
  return (
    <div className="food-detail-container">
      {/* Left Side: Image */}
      <div className="food-detail-image">
        <img src={image} alt={title} />
      </div>

      {/* Right Side: Details */}
      <div className="food-detail-content">
        <h1 className="food-detail-title">{title}</h1>
        <p className="food-detail-calories"><strong>Calories:</strong> {calories}</p>

        <h2>Ingredients</h2>
        <ul className="food-detail-ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        {/* <h2>Instructions</h2> */}
        {/* <p className="food-detail-instructions">{instructions}</p> */}
        <button className='close-buttn' onClick={closeHandler}>close</button>
      </div>
    </div>
  );
}

export default FoodDetail;
