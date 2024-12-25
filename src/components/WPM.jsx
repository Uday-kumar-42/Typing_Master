import React, { useEffect } from "react";

export default function Accuracy({ words, time }) {
  const wpm = Math.floor(words / (time.current / 60000));

  // Use useEffect to update the CSS property after rendering
  useEffect(() => {
    const progressElement = document.querySelector(".circular-progress-wpm");
    if (progressElement) {
      progressElement.style.setProperty("--wpm", wpm);
    }
  }, [wpm]);

  return (
    <div className="wpm">
      <div className="circular-progress-wpm">
        <div className="inner-circle">
          <span className="accuracy-value">{wpm}</span>
          <p className="accuracy-text">WPM</p>
        </div>
      </div>
    </div>
  );
}
