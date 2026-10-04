import { useState } from "react";

function ConditionalTernary() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      {isLoggedIn ? <h3>Dashboard</h3> : <p>Please Login</p>}
    </div>
  );
}

export default ConditionalTernary;