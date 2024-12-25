import React, { useEffect } from "react";
import getText from "./getText";
import Accuracy from "./Accuracy";
import Timer from "./Timer";
import WPM from "./WPM";

export default function FinalResults({
  words,
  time,
  count,
  position,
  dispatch,
  setPosition,
  setWords,
  setSelected,
}) {
  const wpm = Math.floor(words / (time.current / 60000));
  const acc = Math.floor((count.current / position) * 100);
  const text = getText(wpm, acc);

  // Use useEffect to update the CSS property after rendering
  useEffect(() => {
    const progressElement = document.querySelector(".circular-progress");
    if (progressElement) {
      progressElement.style.setProperty("--accuracy", acc);
    }
  }, [acc]);

  return (
    <div className="results">
      <h1>Here are your Results</h1>
      <div className="measures">
        <Accuracy count={count} position={position} />
        <Timer time={time} />
        <WPM words={words} time={time} />
      </div>
      <p className="result-text">{text}</p>
      <button
        className="button primary-button"
        onClick={() => {
          dispatch({ type: "reset" });
          setPosition(0);
          setSelected(null);
          setWords(0);
          count.current = 0;
        }}
      >
        Want to try again..!
      </button>
    </div>
  );
}
