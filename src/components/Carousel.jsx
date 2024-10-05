import React from "react";
import "./Component.css";

const Carousel = ({ direction = "forward", slides }) => {
  return (
    <div className="carousel">
      <div className={`carousel-track ${direction}`}>
        {slides.concat(slides).map((slides, index) => (
          <div className="carousel-item" key={index}>
            <img src={slides} alt={`Slide ${(index % slides.length) + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
