
import React, {useState , useEffect} from "react";
import axios from "axios";
import Newslist from "./Newslist"


function News(){
const [articles,setArticles] = useState([]);

useEffect(()=>{
axios.get( `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=b4d0d609096f4c928e4e24109cd5f24e`)
.then((response)=>(setArticles(response.data.articles)))
.catch((err=>{console.log(err);
}))
},[]);
return(
    <div className="Allnews">
      {articles.map(articles=>{
         return(
            <Newslist
            urlToImage={articles.urlToImage}
            title={articles.title}
            description={articles.description}
            />
         )
      })}
    </div>
)
}

export default News;