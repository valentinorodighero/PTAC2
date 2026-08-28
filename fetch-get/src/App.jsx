import {useState} from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <h1>PTAC 2</h1>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </>
  )
}