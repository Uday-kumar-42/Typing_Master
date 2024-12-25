import React from "react";

export default function Start({ setStarted }) {
  return (
    <div className="start">
      <img src="./assets/boost.png" alt="boost_up"></img>
      <div className="cont">
        <p>Boost-Up your typing speed with our test.Start practicing now..!</p>
        <button
          className="button primary-button"
          style={{ minWidth: "10rem" }}
          onClick={() => {
            setStarted(true);
          }}
        >
          START
        </button>
      </div>
    </div>
  );
}
