import React from "react";

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);


export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="prev"
    onClick={onClick}
    disabled={!enabled}
  >
  &#129128;
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="next"
    onClick={onClick}
    disabled={!enabled}
  >
  &#129130; 
  </button>
);

