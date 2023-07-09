import React, { useRef } from 'react'
import Logo from '../../assests/images/logo.png'
import style from './Navside.module.css'
import { NavLink } from 'react-router-dom';






export default function Navside() {

  
  let sidebar = useRef(null)
  let innerside = useRef(null)
  let sideBarIcon = useRef(null)
  function ChangStatus (){
    let left = window.getComputedStyle(sidebar.current).getPropertyValue('left')
    console.log(left)
    if ( left === "0px"){
      Close()
    }else {
      OpenSide()
    }

    
   
    function OpenSide(){
      sidebar.current.style.left = '0px'
      
      sideBarIcon.current.classList.replace( 'fa-bars' , 'fa-xmark');
    };
  }
  function Close (){
    let width = innerside.current.offsetWidth 
    console.log(width)
    sidebar.current.style.left = `-${width}px`;
    sideBarIcon.current.classList.replace(  'fa-xmark' , 'fa-bars' );
  }
  return (
    <>
  <nav ref={sidebar}  className={`${style.nav}"min-vh-100 position-fixed "`}>
  <div ref={innerside} className=" bg-black  d-flex flex-column justify-content-between min-vh-100 p-4 z-1">
    <div className="links">
      <ul className="list-unstyled overflow-hidden cursor-pointer">
        <NavLink onClick={Close} to="/Search"   className="py-2 d-block cursor-pointer ">Search</NavLink>
        <NavLink  onClick={Close} to="/Categories"   className="py-2 d-block cursor-pointer" >Categories</NavLink>
        <NavLink onClick={Close} to="/Area"  className="py-2  d-block cursor-pointer">Area</NavLink>
        <NavLink  onClick={Close} to="/Ingredients" className="py-2 d-block cursor-pointer">Ingredients</NavLink>
        <NavLink onClick={Close} to={'/Contact'} className="py-2 position-relative cursor-pointer">Contact Us</NavLink>
      </ul>
    </div>
    <div className="nav-footer">
      <div className="icons">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-solid fa-globe" />
      </div>
      <div className="footer">
        <p>Copyright Â© 2019 All Rights <br />Reserved.</p>
      </div>
    </div>
  </div>
  <div className={`${style.Navhider}  d-flex flex-column justify-content-between py-3 align-items-center bg-white text-black`}>
    <img className=" w-50" src= {Logo} alt='' />
    <i ref={sideBarIcon}
     onClick={ChangStatus} 
     className="fa-solid fa-bars fa-align-justify fa-2x" />
    <div>
      <i className="fa-solid fa-globe d-block" />
      <i className="fa-solid fa-share-nodes" />
    </div>
  </div>
</nav>

    </>
  )}

