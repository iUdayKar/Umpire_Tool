import "./styles.css";
import { useState } from "react";

export default function App() {
  const [ballCounter, setBallCounter] = useState(0);
  const addBallHandler = () => {
    setBallCounter(ballCounter + 1);
  };

  const [overCounter, setOverCounter] = useState(0);
  const addOverHandler = () => {
    if (ballCounter === 6) {
      setOverCounter(overCounter + 1);
      setBallCounter(0);
    }
  };

  return (
    <div className="App">
      <h1>Umpire Tool</h1>
      <h3 style={{ color: "tomato" }}>Over:</h3>
      <h1>{overCounter}</h1>
      <h3 style={{ color: "tomato" }}>Ball:</h3>
      <h1>{ballCounter}</h1>

      <button
        onClick={() => {
          addBallHandler();
          addOverHandler();
        }}
      >
        ➕
      </button>
      {/* <button onClick={addOverHandler}>+</button> */}
    </div>
  );
}
