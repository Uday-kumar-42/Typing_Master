import React, { useEffect } from "react";

export default function Accuracy({ count, position }) {
  const acc = Math.floor((count.current / position) * 100);

  // Use useEffect to update the CSS property after rendering
  useEffect(() => {
    const progressElement = document.querySelector(".circular-progress");
    if (progressElement) {
      progressElement.style.setProperty("--accuracy", acc);
    }
  }, [acc]);

  return (
    <div className="accuracy">
      <div className="circular-progress">
        <div className="inner-circle">
          <span className="accuracy-value">{acc}%</span>
          <p className="accuracy-text">real accuracy</p>
        </div>
      </div>
    </div>
  );
}
