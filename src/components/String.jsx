import { useEffect, useState } from "react";
import React from "react";

export default function String({ str, position }) {
  const [visibleWords, setVisibleWords] = useState("");
  const [curr, setCurr] = useState(0);

  useEffect(
    function () {
      if (str !== null) {
        const max = 10;
        const startIndex = Math.max(position - max, 0);
        const endIndex = Math.min(position + max, str.length - 1);
        // Get the words to be displayed
        setCurr(position - startIndex);
        setVisibleWords(str.slice(startIndex, endIndex + 1));
      }
    },
    [position, str]
  );

  return (
    <div className="str">
      {visibleWords.split("").map((l, index) => {
        return <Letter letter={l} index={index} curr={curr} key={index} />;
      })}
    </div>
  );
}

function Letter({ letter, index, curr, isTrue }) {
  return (
    <p className={`letter ${curr === index ? "selected-letter" : ""}`}>
      {letter}
    </p>
  );
}
