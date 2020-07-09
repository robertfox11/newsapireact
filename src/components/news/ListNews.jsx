import React from "react";
import News from "./News";
import PropTypes from "prop-types";
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
ListNews.prototype = {
  news: PropTypes.array.isRequired,
};
export default ListNews;
