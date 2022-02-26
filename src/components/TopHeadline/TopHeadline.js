import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const[articles,setAticles]=useState([]);
    useEffect(()=>{
        const url='https://newsapi.org/v2/top-headlines?q=trump&apiKey=91035f6fe6774028800de6033bc790f0';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top news:{articles.length}</h1>
            {
                articles.map(article=><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;