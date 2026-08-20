import { useState } from "react";

export default function App() {
  // código/lógica do componente
  const [nome, setNome] = useState("Maria");
  return (
    // JSX do componente
    <>
      <h1>PTAC 2</h1>
      <p>Olá, {nome}</p>
      <button onClick={() => setNome("João")}>Clique aqui</button>
    </>
  );
}