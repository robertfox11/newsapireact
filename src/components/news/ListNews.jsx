import React from "react";
import News from "./News";
import { Fragment } from "react";
// const ListNews = ({ news }) => <div className="row"></div>;
const ListNews = ({ news }) => {
  return (
    <div className="row">
      {news.map((not) => (
        <News />
      ))}
    </div>
  );
};

export default ListNews;
