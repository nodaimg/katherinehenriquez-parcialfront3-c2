
import React from "react";

const Form = ({ onSubmit, onChangeInput1, onChangeInput2, input1, input2 }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={input1}
        onChange={onChangeInput1}
      />
      <input
        type="text"
        placeholder="Ingresa tu color favorito en formato hexadecimal"
        value={input2}
        onChange={onChangeInput2}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
