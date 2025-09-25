import React, { useEffect, useState } from "react";
import "./Carousel.css";
const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // beach
  "https://images.unsplash.com/photo-1519681393784-d120267933ba", // mountains
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // forest
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2", // city
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d", // sunset
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  //next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  //prev slide
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev === images.length) === 0 ? images - 1 : prev - 1
    );
  };

  // go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  //autoplay
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlay, currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {/* slides */}
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="carousel-img"
              />
            </div>
          ))}
        </div>

        {/* Nav button  */}
        <button className="button prev" onClick={prevSlide}>
          Prev
        </button>

        <button className="button next" onClick={nextSlide}>
          Next
        </button>

        {/* Dots...  */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="autoplay-button"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
          >
            {isAutoPlay ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
