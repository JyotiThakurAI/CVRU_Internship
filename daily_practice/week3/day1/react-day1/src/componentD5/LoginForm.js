import { useState } from "react";

function LoginForm() {
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
          <label htmlFor="day5-login-username">Username: </label>
          <input
            id="day5-login-username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit" disabled={username.trim() === ""}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <h3>Welcome, {username.trim()}!</h3>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;