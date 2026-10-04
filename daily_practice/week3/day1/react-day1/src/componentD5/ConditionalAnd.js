import { useState } from "react";

function ConditionalAnd() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      {isLoggedIn && <h3>Welcome Back!</h3>}
    </div>
  );
}

export default ConditionalAnd;