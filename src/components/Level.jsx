import React from "react";

export default function Level({ setLevel }) {
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
            setLevel("easy");
          }}
        >
          Easy
        </button>
        <button
          className="button primary-button"
          style={{ minWidth: "7rem" }}
          onClick={() => {
            setLevel("medium");
          }}
        >
          Medium
        </button>
        <button
          className="button primary-button"
          style={{ minWidth: "7rem" }}
          onClick={() => {
            setLevel("hard");
          }}
        >
          Hard
        </button>
      </div>
    </div>
  );
}
