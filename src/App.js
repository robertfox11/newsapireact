import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [category, saveCategory] = useState("");
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
