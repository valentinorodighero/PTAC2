import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import { useState } from "react";

export default function App() {
  return (
    <>
      <h1>Contador</h1>
      <Increment />
      <Decrement />
    </>
  )
}