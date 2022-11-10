import { useEffect, useState } from 'react'
import React from 'react';
import axios from "axios"
import { AddToCart } from '../Action/Actions';
import {useDispatch} from 'react-redux'

const Products = () => {
  const [data , setData] = useState()
  const [cart , setCart] = useState("AddToCart")
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
},[data])

const dispatch = useDispatch()
const  AddToCartHandler = (data)=>{
  if(cart === data){
    setCart(cart)
   dispatch(AddToCart(data))
}
else{
setCart(cart)
dispatch(AddToCart())
}
}

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
        <button className="btn btn-primary" onClick={()=>AddToCartHandler(AddToCart)}>Buy Now</button>
        </div>
        </div>
      )
       ):null
      }
    </div>
  )
}

export default Products

