import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hook/useSelect";

const Form = ({ saveCategory }) => {
  //   lee la api con las opciones
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  // utilizamos custom Select
  const [category, SelectNews] = useSelect("general", OPTIONS);

  //   creamos un funcion searchNews = e =>{
  const searchNews = (e) => {
    e.preventDefault();
    //guardamos la categoria con la funcion que creamos del state y le pasamos la categoria que esta en el custom
    saveCategory(category);
  };
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]}  btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
