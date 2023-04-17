import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

function App() {
  const [news, setNews] = useState("");
  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=test")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search news={news} />
      <Footer />
    </div>
  );
}

export default App;
