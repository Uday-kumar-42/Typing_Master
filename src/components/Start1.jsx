import React from "react";

export default function Start1({ dispatch }) {
  return (
    <div className="start1">
      <img src="./assets/speed.png" alt="boost_up"></img>
      <div className="cont1" id="start">
        <h1>
          Speed meets precision.<br></br>Let's type
        </h1>
        <p>
          Start boosing up your typing speed by practicing with us. Discover
          your typing potential with our fast,accurate and fun typing test with
          a friendly UI and detailed reports.
        </p>
        <button
          className="button primary-button"
          // style={{ minWidth: "10rem", fontSize: "20px" }}
          onClick={() => {
            dispatch({ type: "ready" });
          }}
        >
          START
        </button>
      </div>
    </div>
  );
}
