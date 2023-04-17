import React, { useState, useEffect } from "react";
import "./style.css";
const Card = (props) => {
  const [clickedNews, setClickedNews] = useState("");

  return (
    <div>
      {props.news === "" ? (
        <div className="loader">
          <div class="loadingio-spinner-spinner-977el9wwy2v">
            <div class="ldio-4j5ay0xf86g">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cards">
          {props.news.hits.map((e, i) => (
            <div className="card" key={i}>
              <div className="card-image"></div>
              <div className="category"> category </div>
              <div className="heading ">
                {" "}
                <div className="title">
                  <a href={e.url}>{e.title}</a>
                </div>
                <div className="author">
                  {" "}
                  By <span className="name">{e.author}</span> 4 days ago
                </div>
                <button>
                  <a href={e.url}>Read more</a>{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
