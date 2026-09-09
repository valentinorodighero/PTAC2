import { useState } from "react";
export default function Decrement() {
    const [countDec, setCountDec] = useState(0);
    return (
        <>
            <h2>{countDec}</h2>
            <button onClick={() => setCountDec(countDec - 1)}>-</button>
        </>
    )
}