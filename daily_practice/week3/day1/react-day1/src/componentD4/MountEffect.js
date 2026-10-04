import { useEffect, useState } from "react";

function MountEffect() {
  const [message, setMessage] = useState("Waiting for the component to mount.");

  useEffect(() => {
    console.log("Mount effect ran.");
    setMessage("The effect ran after the initial render.");
  }, []);

  return <p>{message}</p>;
}

export default MountEffect;