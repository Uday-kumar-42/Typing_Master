import React from "react";

export default function DynamicResults({ count, position, words, time }) {
  const wpm =
    time.current === 0 ? 0 : Math.floor(words / (time.current / 60000));
  const acc = position === 0 ? 0 : Math.floor((count.current / position) * 100);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        fontSize: "1.5rem",
        fontWeight: "600",
      }}
    >
      <p>{wpm} WPM</p>
      <p>{acc}% Accuracy</p>
    </div>
  );
}
