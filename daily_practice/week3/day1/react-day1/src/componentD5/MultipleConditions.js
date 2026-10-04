import { useState } from "react";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";

function MultipleConditions() {
  const [role, setRole] = useState("user");

  return (
    <div>
      <label htmlFor="day5-role">Choose a role: </label>
      <select
        id="day5-role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      {role === "admin" ? <AdminPanel /> : <UserPanel />}
    </div>
  );
}

export default MultipleConditions;