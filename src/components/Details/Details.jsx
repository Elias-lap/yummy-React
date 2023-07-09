import React, { useEffect, useState } from "react";
import style from "./Details.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  let { id } = useParams();
  const [Detail, setDetail] = useState([]);
  console.log(id);
  async function Getdat() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return data.meals[0];
  }

  async function getRecipReady() {
    let Detailsobject = await Getdat();
    Detailsobject.ingradiants = [];
    const detailMap = new Map(Object.entries(Detailsobject));
    for (let i = 0; i < detailMap.size; i++) {
      if (detailMap.get(`strIngredient${i}`)) {
        Detailsobject.ingradiants.push(
          `${detailMap.get(`strMeasure${i}`)} ${detailMap.get(
            `strIngredient${i}`
          )}`
        );
      }
    }

    setDetail(Detailsobject);
   
  }

  useEffect(() => {
    getRecipReady();
  });

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className={` position-relative overflow-hidden  ${style.inner}`}>
            <img className="w-100" src={Detail.strMealThumb} alt="" />
            <div className="layer w-100 h-100  position-absolute start-0 d-flex justify-content-center align-items-center p-3">
              <h2 className="text-black">{Detail.strCategory}</h2>
            </div>
          </div>
          <h2>{Detail.strCategory}</h2>
        </div>
        <div className="col-md-8">

          <h2>Instructions</h2>
          <p>{Detail.strInstructions}</p>
          <h2>Area : {Detail.strArea}</h2>
          <h2>Recipes :</h2>
          <div className=" mt-3 p-3">
            {Detail.ingradiants?.map((item, index) => (
              <span key={index} className='btn btn-primary p-2 m-2'>{item}</span>
            ))}
          </div>
         { Detail.strTags&& (
          <div className=" mt-3 p-3">
            <h2>Tags :</h2>
            { Detail.strTags.split(',').map((item , index)=>(
             <span key={index} className='btn btn-danger p-2 m-2'>{item}</span>
            ))}
            
          </div>)}
          <div className="pt-4">
              <a
                className="btn btn-lg btn-success me-2"
                href={Detail.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
              <a
                className="btn btn-lg btn-danger"
                href={Detail.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </div> 

        </div>
      </div>
    </>
  );
}
