import { useState } from "react";

function ButtonEvent() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Button clicked {clickCount} times.</p>
    </div>
  );
}

export default ButtonEvent;