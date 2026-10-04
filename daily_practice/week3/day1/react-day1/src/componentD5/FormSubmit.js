import { useState } from "react";

function FormSubmit() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Form submitted successfully!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="day5-submit-name">Name: </label>
        <input id="day5-submit-name" type="text" required />
        <button type="submit">Submit</button>
      </form>
      {message && <p role="status">{message}</p>}
    </div>
  );
}

export default FormSubmit;