import React, { useEffect, useState } from 'react';
import "./home-news.css";
import { data } from 'jquery';

const HomeNews = () => {
  const [data, setData] = useState("null");

useEffect(()=>{
   const fetchData = async () => {
  try{
      const response = await fetch("https://raw.githubusercontent.com/Dev-id-A/random-news-json/refs/heads/main/random-news.json");
      const data = await response.json();
      setData(data);
  }
  catch(e){
    console.log(e)
  }
}
fetchData()
},[]);

  return (
    <section id="news-section">
        <h2 id="section-title">What's News</h2>
        <div id="news-div" className="container">
            <h4 id="news-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti animi voluptatibus amet aliquam illum corrupti quisquam. Laudantium consequatur neque, perferendis ipsa, dolore nobis magnam iste cumque nesciunt quod unde.</h4>
            <h5 id="news-portal">-Lorem</h5>
            <a id="news-site">Lorem ipsum</a>
        </div>
    </section>
  )
}

export default HomeNews