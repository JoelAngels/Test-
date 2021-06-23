import { useState } from "react";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return <input type="text" onChange={handleChange} title="shootSearch" />;
}

export default Search;
