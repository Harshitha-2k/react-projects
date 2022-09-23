import React from 'react'
import "./Newslist.css";

const Newslist = ({title , urlToImage,description }) => {
     return (
       <div className="News">
           <div className='News-inside'>
              <img className='News-img' src={urlToImage} alt={urlToImage} />
              <h1 className='title'>{title}</h1>
               <p>{description}</p>
           </div>
       </div>
     )
}

export default Newslist;