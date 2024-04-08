import React, { useEffect, useState } from "react";

//stateless = sem estado;
//statefull = com estado;
export function Incrementador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('renderizou pela 1 vez');
  }, []);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <>
      <h3>Contador: {contador}</h3>
      <button type="button" onClick={incrementar}>incrementar</button>
    </>
  );
}