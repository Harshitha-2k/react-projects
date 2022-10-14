import React from 'react'
import { useParams } from 'react-router-dom';

const Product1 = ()=>{
  const proid = useParams()
   const Product1 = proid.filter(x=> x.id == proid);
   const pro = Product1[0];
    console.log(pro);
  return (
      <div>
        <img src={pro.image} className="card-img-top"  />
        <div>
        <h5 >{pro.title}</h5>
        <p >PRICE:{pro.price}</p>
        </div>
    </div>
  )
}

export default Product1
