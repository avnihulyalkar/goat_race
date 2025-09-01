import "./styles.css";
import React, { useState } from "react";

function GoatRace() {
  // useState examples (can have them fill in...)
  const [goat1Position, setGoat1Position] = useState(0);
  const [goat2Position, setGoat2Position] = useState(0);
  const [winner, setWinner] = useState("");

  const FINISH_LINE = 10; // 10 steps to win

  const moveGoat1 = () => {
    const newPosition = goat1Position + 3;
    setGoat1Position(newPosition);
    if (newPosition >= FINISH_LINE && !winner) {
      setWinner("🐐 Goat 1 Wins! 🎉");
    }
  };

  const moveGoat2 = () => {
    const newPosition = goat2Position + 1;
    setGoat2Position(newPosition);
    if (newPosition >= FINISH_LINE && !winner) {
      setWinner("🐐 Goat 2 Wins! 🎉");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🐐 Goat Racing Championship! 🐐</h1>

      {/* Race Track */}
      <div
        style={{ margin: "20px 0", fontFamily: "monospace", fontSize: "24px" }}
      >
        {/* Goat 1 Track */}
        <div>
          {"🟫".repeat(goat1Position)}🐐
          {"⬜".repeat(FINISH_LINE - goat1Position)} 🏁
          <span style={{ marginLeft: "10px" }}>Steps: {goat1Position}</span>
        </div>

        {/* Goat 2 Track */}
        <div>
          {"🟫".repeat(goat2Position)}🐐
          {"⬜".repeat(FINISH_LINE - goat2Position)} 🏁
          <span style={{ marginLeft: "10px" }}>Steps: {goat2Position}</span>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <button
          onClick={moveGoat1}
          disabled={winner}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Move Goat 1! 🐐
        </button>
        <button
          onClick={moveGoat2}
          disabled={winner}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Move Goat 2! 🐐
        </button>
      </div>

      {/* Winner */}
      {winner && (
        <div
          style={{ fontSize: "32px", textAlign: "center", marginTop: "20px" }}
        >
          {winner}
        </div>
      )}

      {/* Reset Button */}
      {winner && (
        <button
          onClick={() => {
            setGoat1Position(0);
            setGoat2Position(0);
            setWinner("");
          }}
          style={{ display: "block", margin: "20px auto", padding: "10px" }}
        >
          New Race! 🏁
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <GoatRace />
    </div>
  );
}
