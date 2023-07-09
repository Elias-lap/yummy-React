import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'


export default function Home() {

const [meals , setmeals] = useState([])
async function Getdata (){
 let{data}= await axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
 

   setmeals(data.meals)
   
 }


useEffect(()=>{
  Getdata()
} , []);
  return (
    <>
    {meals.length ?    <div className="row g-3">
      {meals.map((mealInfo , Index)=>(
        <Card key={Index} meals = {mealInfo}  />

      ))}

    </div> :<Loading/>}

    </>
  )
}
