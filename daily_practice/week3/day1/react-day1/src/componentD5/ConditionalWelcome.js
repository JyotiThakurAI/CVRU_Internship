import { useState } from "react";

function ConditionalWelcome() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
  }

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="day5-welcome-username">Username: </label>
          <input
            id="day5-welcome-username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
          />
          <button type="submit" disabled={username.trim() === ""}>
            Login
          </button>
        </form>
      ) : (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}

      <div>
        <h3>Using &&</h3>
        {isLoggedIn && <p>Welcome, {username.trim()}!</p>}
      </div>

      <div>
        <h3>Using a ternary</h3>
        {isLoggedIn ? (
          <p>Welcome, {username.trim()}!</p>
        ) : (
          <p>Please login to continue.</p>
        )}
      </div>
    </div>
  );
}

export default ConditionalWelcome;