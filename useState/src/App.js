import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  const handleDecrease = () => {
    setState(state - 1);
  };

  const handleIecrease = () => {
    setState(state + 1);
  };

  return (
    <div className="app">
      <h2>useState Boilerplate</h2>

      <div className="content">
        <button onClick={handleDecrease} className="decrease">
          decrease
        </button>
        <p>{state}</p>
        <button onClick={handleIecrease} className="increase">
          increase
        </button>
      </div>
    </div>
  );
}

export default App;
