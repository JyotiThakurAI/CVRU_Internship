import { useState } from "react";
import "./DynamicClass.css";

function DynamicClass() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dynamic-class-example">
      <div className={isActive ? "active-box" : "inactive-box"}>
        {isActive ? "Active state" : "Inactive state"}
      </div>
      <button onClick={() => setIsActive((previousValue) => !previousValue)}>
        Toggle class
      </button>
    </div>
  );
}

export default DynamicClass;