import axios from "axios";
import React, { useEffect, useState } from "react";
// import Loading from '../Loading/Loading'
import style from "./Categories.module.css";
import { Link } from "react-router-dom";
export default function Categories() {
  const [categories, setcategories] = useState([]);
  async function GetData() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    setcategories(data.categories);
  }
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="row">
        {categories.map((item, index) => (
         
          <div
            key={index}
            className={`col-md-3 overflow-hidden position-relative  ${style.home}  `}
          >
             <Link to={`/Categories/${item.strCategory}`}>
            <img src={item.strCategoryThumb} alt="" />
            <div className={`${style.layer}`}>
              <h2>{item.strCategory}</h2>
              <p>
                {item.strCategoryDescription.split(" ").slice(0, 20).join(" ")}
              </p>
            </div>
            </Link>
          </div>
          
        ))}
      </div>
    </>
  );
}
