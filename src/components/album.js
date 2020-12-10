import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

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
    "Website, Capital Factory House at SXSW, Austin, Texas, 2020. Design: Austin Waldo & Eric Moe.",
    "Interactive Videoconferencing Map, STARTUPS, Austin Startup Crawl, Austin, Texas, 2020.",
    "Graphic T-Shirts & Custom Socks for Capital Factory, Texas, 2018–2019.",
    "Logos & Brand Systems, Austin Startup Crawl, Fed Supernova, Longhorn Startup, 2018–2020.",
    "Product Design, Sabre: Intuitive Safety Razor, Austin, Texas, 2016.",
    "Poster, Springs, Austin, Texas, 2020."
  ];

  const figcap = captions[selectedIndex];

const data = useStaticQuery(graphql`
  query {
    allFile(filter: {extension: {regex: " /(jpg)|(png)|(jpeg)|(svg)/"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              aspectRatio
              base64
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`)

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);


  return (
    <>
        <div className="div4" style={viewportCss} ref={viewportRef}>
          <div style={containerCss} className="containerCss">

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[7].node.childImageSharp.fluid} alt="test"/>
            </div>

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[6].node.childImageSharp.fluid} alt="test"/>
            </div>

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[8].node.childImageSharp.fluid} alt="test"/>
            </div>

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[10].node.childImageSharp.fluid} alt="test"/>
            </div>

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[9].node.childImageSharp.fluid} alt="test"/>
            </div>

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[5].node.childImageSharp.fluid} alt="test"/>
            </div>

            <div style={slideCss}>
              <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="test"/>
            </div>

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




