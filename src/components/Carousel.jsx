import React, { useState } from "react";

const slides = [
  { id: 1, content: "Slide 1", bgColor: "#0078D4" },
  { id: 2, content: "Slide 2", bgColor: "#4CAF50" },
  { id: 3, content: "Slide 3", bgColor: "#FF9800" },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{ backgroundColor: slides[currentSlide].bgColor }}
      >
        {slides[currentSlide].content}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
