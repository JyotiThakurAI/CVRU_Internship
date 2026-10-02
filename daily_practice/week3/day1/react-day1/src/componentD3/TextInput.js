import { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Text Input Example</h2>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInput;