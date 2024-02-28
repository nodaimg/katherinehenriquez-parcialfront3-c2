
import React, { useState } from "react";
import Form from "./Form";

import Card from "./Card";

 function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null); 

  const onSubmitForm = (e) => {
    e.preventDefault();

    // Validaciones
    const validation1 = input1.trim().length >= 3 && !input1.startsWith(" ");
    const validation2 = input2.trim().length >= 6;

    if (!validation1 || !validation2) {

      // Paso 4: Validaciones
      setError("Por favor, chequea que la información sea correcta.");
      setData(null); // Limpiar datos en caso de error
    } else {

      // Paso 5: Resultado Final
      setError("");
      setData({
        input1,
        input2,
      });
    }
  };

  return (
    <div className="App">
      {/* Paso 1: Agregamos los componentes */}
      <Card input1={input1} input2={input2} error={error} />
      <Form
        onSubmit={onSubmitForm}
        onChangeInput1={(e) => setInput1(e.target.value)}
        onChangeInput2={(e) => setInput2(e.target.value)}
        input1={input1}
        input2={input2}
      />
      {data && <Card {...data} error={error} />} {/* Mostrar Card solo si hay datos */}
    </div>
  );
}


export default App; 
