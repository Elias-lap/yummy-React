import axios from 'axios'
import React, {  useState } from 'react'
import Card from '../Card/Card';


export default function Search() {
  const [meals , setMeals] = useState([]);
  async function GetData (type,Term){
   let{data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${Term}`)
   console.log(data.meals)
   Term&& data.meals ? setMeals(data.meals): setMeals([])
  }
  return (
    <>
    
   <div>
  <div className="row py-4 ">
    <div className="col-md-6 ">
      <input 
      onChange={(term)=>{
        let Term=term.target.value
        GetData( 'f', Term)
      }} className="form-control bg-transparent text-white" type="text" placeholder="Search By Name" />
    </div>
    <div className="col-md-6">
      <input  
      maxLength="1"
      onChange={(term)=>{
        
        let Term=term.target.value
        GetData( 'f', Term)
      }}
      className="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter" />
    </div>
  </div>
  {meals.length ? (<div className="row g-3">
    { meals.map((Meals , index)=><Card key={index} meals= {Meals}/>
    )}
  </div>): (
    <div className=' vh-85 align-items-center  w-100 justify-content-center'>
      <h2>No Meals Found</h2>
    </div>
  )}
</div>

    
    </>
  )
}
