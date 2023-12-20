import FoodItem from '../Components/FoodItem.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/navbar.js';

export default function FoodGuide(){
  const [ing, setIng] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const response = await fetch("http://localhost:8080/Ingredients");
        const data = await response.json();
        setIng(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchTopArticles();
  }, []); // Empty dependency array ensures that this effect runs once on component mount
  const navigate = useNavigate();

  const handleClick = (ingredient) => {
    console.log("Clicked article:", ingredient); // Log clicked article data
    navigate('article', { state: { ingredient } });
  }
const onSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('food');
    const regex = new RegExp(query, "i");
    const response =  ing.filter((element) =>regex.test(element.title));
    if (response !== undefined) {
     setResult(response)
     console.log(response)
    } else {
      console.log("No result found")
    }
}

    return (
        <>
        <Navbar></Navbar>
        <div class="spacer"></div>
        <div className="wrapper">
        <h1> Food Guide</h1>
        <form onSubmit={onSubmit}>
        <input className='ing-serach-bar' name='food' placeholder='Search Here' ></input>
        </form>
        <div className = "reset btn" onClick={()=>{
            setResult([])
        }}>Reset</div>
        <div className="ingredient-grid-container">
          {result.length === 0 && ing.length > 0 &&
            ing.map((e, index) => (
              <FoodItem key = {index} imgURL={e.imgURL}
                title={e.title}
                litre_kg={e.litre_kg}
                o_servings={e.o_servings}
              />
            ))}{
                result.length>0 &&  result.map((e, index) => (
              <FoodItem key = {index} imgURL={e.imgURL}
                title={e.title}
                litre_kg={e.litre_kg}
                o_servings={e.o_servings}
              />
            ))
            }
        </div>
      </div>
        </>
    )
}