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
    <div className="caption" style={viewportCss} ref={emblaRef}>
      <div style={containerCss}>
        <div style={slideCss}>
          <div className="caption">
            <figcaption>BEEP Signage, Various, Austin Startup Crawl, Austin, Texas, 2019. Design:&nbsp;Eric&nbsp;Moe</figcaption>
          </div>
        </div>

        <div style={slideCss}>
          <div className="caption">
            <figcaption>BOOP</figcaption>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
