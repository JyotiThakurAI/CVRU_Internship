import { useState } from "react";

function ConditionalMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Ternary Conditional Rendering</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn ? <p>Welcome!</p> : <p>Please Login</p>}
    </div>
  );
}

export default ConditionalMessage;