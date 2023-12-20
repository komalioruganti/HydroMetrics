import img from "../images/food.png";
function FoodItem({imgURL,title,litre_kg,o_servings}) {
  return (
    <>
        <div className="ingredient-container">
        <p className="img-p">
          <img src={imgURL} className="ingredient-img" alt = "Ingredient"></img>
          </p>
          <div className="ingredient-title">
            {title}
          </div>
          <div className="serving-size">
          {o_servings}
          </div>
        
        <div className="waterPerServing">{litre_kg}</div>
        <div className="btn LearnMore">Learn More</div>
      </div>
    </>
  );
}
export default FoodItem;
