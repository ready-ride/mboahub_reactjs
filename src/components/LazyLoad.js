import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

function LazyLoad({image, width, height, alt}) {
  return (
    <LazyLoadImage src={image}
      width={width}
      height={height}
      alt={alt}
      effect="blur"
    />
  )
}

export default LazyLoad;