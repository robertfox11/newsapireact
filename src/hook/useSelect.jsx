import React, { useState } from "react";

const useSelect = (stateInicial, options) => {
  //creamos nuestro  state del custom hook para utilizar
  const [state, updateState] = useState(stateInicial);

  // Creamos una function que sera un select
  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => updateState(e.target.value)}
    >
      {options.map((option) => (
        //pasamos nuestra key
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  //retornara un arreglo
  return [state, SelectNews];
};

export default useSelect;
