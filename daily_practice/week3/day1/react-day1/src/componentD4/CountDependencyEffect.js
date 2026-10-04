import { useEffect, useState } from "react";

function CountDependencyEffect() {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
    setEffectCount(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Value observed by the effect: {effectCount}</p>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increase count
      </button>
    </div>
  );
}

export default CountDependencyEffect;