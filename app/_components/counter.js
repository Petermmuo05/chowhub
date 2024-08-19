"use client"
import { useState } from "react";

function Counter() {
  const [num, setnum] = useState(1);
  return (
    <div>
      <button onClick={() => setnum((num) => num + 1)}>+</button>
      {num}
      <button onClick={() => setnum((num) => num - 1)}>-</button>
    </div>
  );
}

export default Counter;
