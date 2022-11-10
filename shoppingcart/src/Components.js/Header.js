import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'
import AddItems from '../Reducer/Reducer'

 const  Header = () => {  
  const state = useSelector(item=>item.AddItems)

  return (
        <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
           <span className='shop-cart' >SHOPPING CART</span>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <NavLink className="nav-item" to="/Home">Home</NavLink>
                 </li>
               <li className="nav-item">
                 <NavLink className="nav-item" to="/Products" >Products</NavLink>
               </li>
             </ul>
             </div>
             </div>
             <button className="btn">
              <NavLink className="nav-item" to="/Login">Login</NavLink>
              </button>
              <br/>
              <button className="btn">cart({state.length})</button>
       </nav> 
     </div>

   )
 }

 export default Header