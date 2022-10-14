import { useEffect, useState } from 'react'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data , setData] = useState()

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>setData(json))
},[data])

  return (
    <div className='inner-text'>
    {
      data?
      data.map((items)=>(
        <div className="card" key={items.id} >
        <img src={items.image} className="card-img-top"  />
        <div className="card-body">
        <h5 className="card-text">{items.title}</h5>
        <p className="card-text">PRICE:{items.price}</p>
        <NavLink  to={`/Products/${items.id}`} className="btn btn-primary" >Buy Now </NavLink>
        </div>
        </div>
      )
      ):null
    }
    </div>
  )
}

export default Products

