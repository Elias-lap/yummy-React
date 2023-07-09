import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { useParams } from 'react-router-dom'

export default function CategoriesMeal() {
 let {category} = useParams()
  const [ meals , setmeals ] = useState([])
 async function GetData() {
   let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
   console.log(data.meals)
   setmeals(data.meals)
   console.log('hi')
  }


useEffect (()=>{
 GetData()
},[])


  return (
    <>
    <div className="row g-3">
    {meals && meals.map((item , index)=><Card key={index} meals={item }/>)}
    </div>
    
    </>
  )
}
