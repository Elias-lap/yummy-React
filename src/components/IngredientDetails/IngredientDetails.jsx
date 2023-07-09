import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card.jsx";


export default function IngredientDetails() {
  const [meals, setMeals] = useState([]);
  let { ingredient } = useParams();

  async function getData() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    console.log(data.meals);
    setMeals(data.meals);
  }
  useEffect(() => {
    getData();
  });
  return (
    <>
        <div className="row py-5 g-3">
          { meals&& meals.map ((meal, index) => (
            <Card meals={meal} key={index} />
          ))}
        </div>
      
    </>
  );
}
