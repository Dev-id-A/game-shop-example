import React, { useEffect, useState, useMemo } from 'react';
import "./home-news.css";
import { data } from 'jquery';

const HomeNews = () => {
  const [data, setData] = useState("null");
  const randomNews = useMemo(() =>{
    if(data.length === 0){
      return null;
    }
      return Math.floor(Math.random() * data.length);
  },[data]);
  console.log(randomNews);

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
            <h4 id="news-title">{data[randomNews].news}</h4>
            <h5 id="news-portal">-{data[randomNews].portal}</h5>
            <a id="news-site" href={data[randomNews].link} target="_blank">{data[randomNews].link}</a>
        </div>
    </section>
  )
}

export default HomeNews