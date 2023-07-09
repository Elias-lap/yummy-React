import React from 'react'
import { Outlet } from 'react-router-dom'
import Navside from '../Navside/Navside'


export default function Layout() {
  return (
    <>
     <Navside/>
    <div className="container mt-3">
     
    <Outlet>
      
      </Outlet>
    
    </div>
    

    </>
  )
}
