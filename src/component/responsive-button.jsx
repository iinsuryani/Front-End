import React from "react";
import Button from "./Button";
import "./App.css";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <Button text="Click me" onClick={handleClick} className="responsive-button" />
    </div>
  );
};

export default App;
