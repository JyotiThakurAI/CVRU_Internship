import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("The parent is waiting for the child.");

  function showMessage() {
    setMessage("The child called the function passed by the parent!");
  }

  return (
    <div>
      <p>{message}</p>
      <Child onButtonClick={showMessage} />
    </div>
  );
}

export default Parent;