import { useState } from "react";
export default function Increment() {
    const [countInc, setCountInc] = useState(0);
    return (
        <>
            <h2>{countInc}</h2>
            <button onClick={() => setCountInc(countInc + 1)}>+</button>
        </>
    )
}