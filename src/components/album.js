import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";

const viewportCss = {
  overflow: 'hidden',
}
const containerCss = {
  display: 'flex',
}
const slideCss = {
  position: 'relative',
  minWidth: '100%',
}

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  const captions = [ 
    "Signage, Various, Austin Startup Crawl, Austin, Texas, 2019. Design: Eric Moe", 
    "boom", 
    "bam"
  ];

  const figcap = captions[selectedIndex];

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);


  return (
    <>
        <div className="div4" style={viewportCss} ref={viewportRef}>
          <div style={containerCss} >
            <div style={slideCss}>Slide 1</div>
            <div style={slideCss}>Slide 2</div>
            <div style={slideCss}>Slide 3</div>
          </div>
        </div>

    <div className="caption">
      <div className="arrows">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
        <br /> 
        <figurecaption className="mainCap">
          {figcap}
        </figurecaption>
      </div>
    </>
  );
};

export default EmblaCarousel;

