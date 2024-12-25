import React from "react";

export default function Level({ dispatch }) {
  return (
    <div className="level">
      <p>
        Select the level you are comfortable with,the level of the text depends
        on your selection
      </p>

      <div className="btns">
        <button
          className="button primary-button"
          style={{ minWidth: "7rem" }}
          onClick={() => {
            dispatch({ type: "setEasy" });
            dispatch({ type: "active" });
          }}
        >
          Easy
        </button>
        <button
          className="button primary-button"
          style={{ minWidth: "7rem" }}
          onClick={() => {
            dispatch({ type: "setMedium" });
            dispatch({ type: "active" });
          }}
        >
          Medium
        </button>
        <button
          className="button primary-button"
          style={{ minWidth: "7rem" }}
          onClick={() => {
            dispatch({ type: "setHard" });
            dispatch({ type: "active" });
          }}
        >
          Hard
        </button>
      </div>
    </div>
  );
}
