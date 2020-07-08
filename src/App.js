import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [category, saveCategory] = useState("");
  const [news, saveNews] = useState([]);
  useEffect(() => {
    const consultApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c5bacfd23c3643208b9f2e22baeb84ad`;
      const res = await fetch(url);
      const news = await res.json();
      // console.log(news.articles);
      saveNews(news.articles);
    };
    consultApi();
  }, [category]);
  return (
    <Fragment>
      <Header title="Buscador de Noticias" />
      <div className="container white">
        <Form saveCategory={saveCategory} />
      </div>
    </Fragment>
  );
}

export default App;
