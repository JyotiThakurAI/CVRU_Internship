import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Registration Form</h2>

      <label>Name:</label>
      <br />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <label>Email:</label>
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserForm;