import { useState } from "react";

function InputChangeEvent() {
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="day5-name">Your name: </label>
      <input
        id="day5-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <p>Current value: {name || "(empty)"}</p>
    </div>
  );
}

export default InputChangeEvent;