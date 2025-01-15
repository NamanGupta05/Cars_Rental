import React, { useRef } from "react";
import Slider from "react-slick";
import Cars1 from "../../assests/SlideImages/Cars1.png";
import Cars2 from "../../assests/SlideImages/Cars2.png";
import Cars3 from "../../assests/SlideImages/Cars3.png";
import Cars4 from "../../assests/SlideImages/Cars4.png";
import Cars5 from "../../assests/SlideImages/Cars5.png";
import Cars6 from "../../assests/SlideImages/Cars6.png";
import "../../style/SlideImages.css";

const carData = [
  { name: "Ferrari F8", image: Cars1 },
  { name: "Lamborghini Huracán", image: Cars2 },
  { name: "Porsche 911", image: Cars3 },
  { name: "Tesla Model S", image: Cars4 },
  { name: "BMW M4", image: Cars5 },
  { name: "Audi R8", image: Cars6 },
];

const LatestCollections = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="collections-container">
      <h2 className="collections-heading">Our Latest Collections</h2>
      <div className="slider-wrapper">
        <button className="scroll-btn left-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <Slider ref={sliderRef} {...settings}>
          {carData.map((car, index) => (
            <div key={index} className="car-card">
              <img src={car.image} alt={car.name} className="car-image" />
              <h3 className="car-name">{car.name}</h3>
            </div>
          ))}
        </Slider>
        <button className="scroll-btn right-btn" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default LatestCollections;
