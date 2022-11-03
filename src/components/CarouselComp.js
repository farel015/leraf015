import React from "react";
import { Carousel } from "react-bootstrap";
import iklan from "../assets/img/iklan.svg";
import iklankedua from "../assets/img/iklan2.svg";
import iklanketiga from "../assets/img/iklan3.svg";

const CarouselComp = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100 iklancarousel" src={iklan} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 iklancarousel" src={iklankedua} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 iklancarousel" src={iklanketiga} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
