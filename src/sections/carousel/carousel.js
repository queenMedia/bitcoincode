import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const totalImages = 10;
  const imagesPerPage = 6;
  const secondsPerSlide = 1;
  const transitionDuration = 2000; // milliseconds

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);

      // Reset the transition after the animation completes
      setTimeout(() => {
        setTransitionEnabled(false);
      }, transitionDuration);
    }, secondsPerSlide * 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderImages = () => {
    const images = [];

    for (let i = currentIndex; i < currentIndex + imagesPerPage; i++) {
      const imageIndex = i % totalImages;
      console.log(imageIndex);
      images.push(
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={imageIndex}
          src={require(`../../assets/bitcoin360ai/currency_${imageIndex}.png`)}
          alt={`Image ${imageIndex}`}
          className={`carousel-image${true ? " transition" : ""}`}
        />
      );
    }

    return images;
  };

  return (
    <div className="carousel">
      <h1>Las mejores divisas para operar ahora mismo</h1>
      <div className="carousel-container" >
        <div className="image-container">{renderImages()}</div>
      </div>
    </div>
  );
};

export default Carousel;
