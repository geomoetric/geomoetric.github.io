import React, { useEffect } from 'react'
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

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
      <figcaption>Signage, Various, Austin Startup Crawl, Austin, Texas, 2019. Design:&nbsp;Eric&nbsp;Moe</figcaption>
    </div> 
    </>
  )
}

export default EmblaCarousel
