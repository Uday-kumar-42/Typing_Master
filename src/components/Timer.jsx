import React from "react";

export default function Timer({ time }) {
  const seconds = Math.floor(time.current / 1000);
  const minutes = Math.floor(seconds / 60);

  return (
    <div className="timer">
      <div
        className="circular-timer"
        style={{ width: "110px", height: "110px" }}
      >
        <div
          className="inner-circle"
          style={{ width: "100px", height: "100px" }}
        >
          <span className="time-display">
            {minutes}:{seconds % 60}
          </span>
          <p className="time-label">min:sec</p>
        </div>
      </div>
      <div style={{ marginBlock: "0.5rem", fontWeight: "600" }}>duration</div>
    </div>
  );
}
