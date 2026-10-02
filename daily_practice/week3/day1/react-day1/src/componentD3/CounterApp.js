import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter: {count}</h2>

        <button
        onClick={() => setCount(count + 1)}
        style={{
            fontSize: "24px",
            padding: "8px 20px",
            margin: "5px",
            cursor: "pointer",
        }} > + </button>

        <button
        onClick={() => setCount(count - 1)}
        style={{
            fontSize: "24px",
            padding: "8px 20px",
            margin: "5px",
            cursor: "pointer",
        }} > -  </button>
    </div>
  );
}

export default CounterApp;