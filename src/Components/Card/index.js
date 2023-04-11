import React, { useState, useEffect } from "react";
import "./style.css";
const Card = () => {
  const [news, setNews] = useState("");
  const [clickedNews, setClickedNews]= useState("");

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=test")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

 
  console.log(news);
  console.log("hi");

  return (
    <div>
      {news.hits.map((e, i) => (
        <div class="card" key={i}>
          <div class="card-image"></div>
          <div class="category"> category </div>
          <div class="heading ">
            {" "}
            <div className="title">

            <a href={e.url}>
            {e.title}

            </a>
            </div>
            <div class="author">
              {" "}
              By <span className="name">{e.author}</span> 4 days ago
            </div>
            <button ><a href={e.url}>Read more</a> </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
