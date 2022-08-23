import React from "react";
import "./Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from "./CarouselComponent";
import Medal from './medal.png'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const data = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s`,
    image: "",
    name: "Jhon Doe",
    post: "Designation",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s`,
    image: "",
    name: "Jhon Doe",
    post: "Designation",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s`,
    image: "",
    name: "Jhon Doe",
    post: "Designation",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s`,
    image: "",
    name: "Jhon Doe",
    post: "Designation",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s`,
    image: "",
    name: "Jhon Doe",
    post: "Designation",
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s`,
    image: "",
    name: "Jhon Doe",
    post: "Designation",
  },
];
const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="testimonials">
        <div className="testimonials-heading-container">
          <div className="testimonialsbar"></div>
          <div className="testimonials-heading1">Testimonials.</div>
        </div>
        <div className="testimonials-heading2">
          WE ARE MORE THAN DIGITAL AGENCY
        </div>
      </div>
      <div className="testimonials-carousel">
        <Carousel responsive={responsive}>
          {data.map((item, index) => {
            return <CarouselComponent item={item} />;
          })}
        </Carousel>
      </div>
      <div className="testimonials-icons">
      <img src={Medal} className="carousel-image-icon"/>
      <img src={Medal} className="carousel-image-icon"/>
      <img src={Medal} className="carousel-image-icon"/>
      <img src={Medal} className="carousel-image-icon"/>
      <img src={Medal} className="carousel-image-icon"/>
      <img src={Medal} className="carousel-image-icon"/>
      <img src={Medal} className="carousel-image-icon"/>
      </div>
      <div className="testimonialbarr"></div>
    </div>
  );
};

export default Testimonials;
