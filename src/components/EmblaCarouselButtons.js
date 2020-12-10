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
  <svg id="leftArrow" xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 288 288">
  <path d="M0,145.8v-3.1L139.6,4l23.9,26.1L61.1,128.5,288,125.8v36.8L61.1,160l102.4,97.9L139.6,284Z" fill="#4967a9"/>
</svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="next"
    onClick={onClick}
    disabled={!enabled}
  >
  <svg id="rightArrow" xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="0 0 288 288">
  <path d="M124.5,257.9,226.9,160,0,162.6V125.8l226.9,2.7L124.5,30.1,148.4,4,288,142.7v3.1L148.4,284Z" fill="#4967a9"/>
</svg>
  </button>
);

