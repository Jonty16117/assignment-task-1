import React from "react";
import image1 from "../Assets/1.webp";
import image2 from "../Assets/2.jpg";
import styles from "../Styles/RefRevCard.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function RefRevCard() {
  return (
    <div className={styles.root}>
      
    </div>
  );
}

export default RefRevCard;
