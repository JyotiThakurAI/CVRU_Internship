import { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This effect runs after every render.");
  });

  return (
    <div>
      <p>The effect runs after each render. Click to trigger another render.</p>
      <p>Render trigger count: {count}</p>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Trigger render
      </button>
    </div>
  );
}

export default BasicEffect;