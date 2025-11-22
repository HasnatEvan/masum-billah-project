// LazyImage.jsx

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, width, height, className }) => {
  return (
    <LazyLoadImage
      src={src}              // ইমেজ URL
      alt={alt}              // ইমেজ alternative লেখা
      width={width}          // dimension দিলে layout shift হয় না
      height={height}
      effect="blur"          // Blur effect (scroll করলে আসবে)
      loading="lazy"         // Native lazy loading support
      className={className}  // Custom CSS / Tailwind class
    />
  );
};

export default LazyImage;
