import React, { useEffect, useState, useMemo } from 'react';
import "./home-news.css";
import $ from 'jquery';

const HomeNews = () => {
  const [data, setData] = useState("null");
  const [randomNumber, setRandomNumber] = useState(0);

useEffect(()=>{
    if(data.length === 0){
      return null;
    }

    const fadeNews = setInterval(()=>{
      $("#news-title").fadeOut(1000);
      $("#news-portal").fadeOut(1000);
      $("#news-site").fadeOut(1000, () =>{

      setRandomNumber(Math.floor(Math.random() * data.length));

      $("#news-title").fadeIn(1000);
      $("#news-portal").fadeIn(1000);
      $("#news-site").fadeIn(1000);
      });
    },7000)
      
    return() => clearInterval(fadeNews); 
  },[data]);

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
            <h4 id="news-title">{data[randomNumber].news}</h4>
            <h5 id="news-portal">-{data[randomNumber].portal}</h5>
            <a id="news-site" href={data[randomNumber].link} target="_blank">More about the new's here <i className="bi bi-link-45deg"></i></a>
        </div>
    </section>
  )
}

export default HomeNews