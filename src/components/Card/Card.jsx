import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
export default function Card({meals}) {

  return (
    <>
    <div className={`${style.meal} col-md-3 `}>
      <Link to= {`/${meals.idMeal}`}>
      <div
            className={`${style.inner} position-relative rounded-3 overflow-hidden`}
          >
            <img src={meals.strMealThumb} className="w-100" alt=''/>
            <div className="layer w-100 h-100 position-absolute start-0 d-flex align-items-center p-3">
              <h2>{meals.strMeal}</h2>
            </div>
          </div>
      
      
      </Link>
        
        
        
      </div>
    </>
  )
}
