import { useState } from "react";
import "./Button.css";

function Button() {
  const [value, setValue] = useState("Press Here");

  const shootFunction = () => {
    setValue("You Clicked");
  };

  return (
    <button onClick={shootFunction} title="shoot function">
      {value}
    </button>
  );
}

export default Button;
