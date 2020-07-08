import React from "react";
import News from "./News";
// const ListNews = ({ news }) => <div className="row"></div>;
const ListNews = ({ news }) => {
  return (
    <div className="row">
      {news.map((noticia) => (
        <News key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListNews;
