import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from 'embla-carousel/react'

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

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  const captions = [ 
    "Signage, Various, Austin Startup Crawl, Austin, Texas, 2019. Design: Eric Moe", 
    "boom", 
    "bam"
  ];

  const figcap = captions[selectedIndex];

  useEffect(() => {
    if (!emblaApi) {
    onSelect();
    emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect])

  return (
    <>
      <div className="div4" style={viewportCss} ref={emblaRef}>
        <div style={containerCss}>
          <div style={slideCss}>Slide 1</div>
          <div style={slideCss}>Slide 2</div>
          <div style={slideCss}>Slide 3</div>
        </div>
      </div>

    <div className="caption">
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <br /> 
      <figurecaption>
        {figcap}
      </figurecaption>
    </div>
    </>
  )
}

export default EmblaCarousel
