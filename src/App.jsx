
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Details from './components/Details/Details';
import  Search from  './components/Search/Search'
import Categories from './components/Categories/Categories'
import Area from './components/Area/Area'
import Ingredients from './components/Ingredients/Ingredients';

import Contact from './components/Contact/Contact'
import AreaMeals from './components/AreaMeals/AreaMeals'

import {createHashRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import CategoriesMeal from './components/CategoriesMeal/CategoriesMeal';
import IngredientDetails from './components/IngredientDetails/IngredientDetails';

 let routers =createHashRouter( [{
  path:'/' , element :<Layout /> , children :[{
    index:true , element : <Home/>},
    {path : '/:id' , element : <Details/>},
  {path : '/Search' , element : <Search/>},
  {path : '/Categories' , element : <Categories/>},
  {path : '/Categories/:category' , element : <CategoriesMeal/>},
  {path : '/Area' , element : <Area/>},
  {path : '/area/:area' , element : <AreaMeals/>},
  {path : '/Ingredients' , element : <Ingredients/>},
  {path : '/Ingredients/:Ingredients' , element : <IngredientDetails/>},
  {path : '/Contact' , element : <Contact/>},
  


]
 }])
function App() {
  return (
    <>
    <RouterProvider router={routers}>  </RouterProvider>
    </>
  )
}

export default App;
