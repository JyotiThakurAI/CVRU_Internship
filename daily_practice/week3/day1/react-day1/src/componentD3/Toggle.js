import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering Example</h2>

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <h3>Hello Students!</h3>}
    </div>
  );
}

export default Toggle;