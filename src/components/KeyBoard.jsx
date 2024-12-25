import React from "react";

const alphabets = [
  { value: "q", code: 113 },
  { value: "w", code: 119 },
  { value: "e", code: 101 },
  { value: "r", code: 114 },
  { value: "t", code: 116 },
  { value: "y", code: 121 },
  { value: "u", code: 117 },
  { value: "i", code: 105 },
  { value: "o", code: 111 },
  { value: "p", code: 112 },
  { value: "a", code: 97 },
  { value: "s", code: 115 },
  { value: "d", code: 100 },
  { value: "f", code: 102 },
  { value: "g", code: 103 },
  { value: "h", code: 104 },
  { value: "j", code: 106 },
  { value: "k", code: 107 },
  { value: "l", code: 108 },
  { value: "z", code: 122 },
  { value: "x", code: 120 },
  { value: "c", code: 99 },
  { value: "v", code: 118 },
  { value: "b", code: 98 },
  { value: "n", code: 110 },
  { value: "m", code: 109 },
];

export default function KeyBoard({ selected, position }) {
  return (
    <>
      <StartFlag position={position} />
      <div className="key-board">
        <KeyGrid1 selected={selected} />
        <KeyGrid2 selected={selected} />
        <KeyGrid3 selected={selected} />
        <Space selected={selected} />
      </div>
    </>
  );
}

function StartFlag({ position }) {
  if (position > 1) return null;
  return (
    <div
      className={`start-flag ${
        position === 0 ? "start-flag-enter" : "start-flag-move-up"
      }`}
    >
      <p>Start Typing</p>
    </div>
  );
}

function KeyGrid1({ selected }) {
  const start = 0;

  return (
    <div className="key-grid">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
        return (
          <Key
            value={alphabets[start + i - 1].value}
            code={alphabets[start + i - 1].code}
            selected={selected}
            key={i}
          />
        );
      })}
    </div>
  );
}

function KeyGrid2({ selected }) {
  const start = 10;
  return (
    <div className="key-grid">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((i) => {
        return (
          <Key
            value={alphabets[start + i - 1].value}
            code={alphabets[start + i - 1].code}
            selected={selected}
            key={i}
          />
        );
      })}
    </div>
  );
}

function KeyGrid3({ selected }) {
  const start = 19;
  return (
    <div className="key-grid">
      {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => {
        return (
          <Key
            value={alphabets[start + i - 1].value}
            code={alphabets[start + i - 1].code}
            selected={selected}
            key={i}
          />
        );
      })}
    </div>
  );
}

function Space({ selected }) {
  const code = 32;
  return (
    <>
      <p className={`item  space ${selected === code ? "selected" : ""}`}> </p>
    </>
  );
}

function Key({ value, code, selected }) {
  return (
    <>
      <p className={`item ${selected === code ? "selected" : ""}`}>{value}</p>
    </>
  );
}
