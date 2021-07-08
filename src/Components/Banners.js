import React from "react";
import banner1 from "../Assets/banner1.png";
import banner2 from "../Assets/banner2.png";
import banner3 from "../Assets/banner3.png";
import styles from "../Styles/Banners.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderBanner from "./SliderBanner";

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

//banner 1
let heading1 = "Pro Tip #1:";
let text1 =
  "A/B Test Your Referral Program. Start Creating new Referral Program to find out which referral program strategy brings most of the revenue to your Business.";
let bgColor1 = "#f2f2f2";
let textColor1 = "black";

//banner 2
let heading2 = "Pro Tip #2:";
let text2 =
  "Test out your Referral Program .It will give you a journey map of what your customers will see before the referral program is even live.";
let bgColor2 = "#455a64";
let textColor2 = "white";

//banner 3
let heading3 = "Pro Tip #3:";
let text3 =
  "Customize rewards, decide what an advocate will get referring your Product and What Referred friend will get.";
let bgColor3 = "#739af0";
let textColor3 = "white";

const CustomDot = ({ onMove, index, onClick, active }) => {
  return (
    <li
      className={active ? styles["dotActive"] : styles["dotInactive"]}
      onClick={() => onClick()}
    >
      {/* <div className={styles.customDot} /> */}
    </li>
  );
};

function Banners() {
  return (
    <div className={styles.root}>
      <Carousel
        responsive={responsive}
        showDots={true}
        draggable={true}
        infinite={true}
        swipeable={true}
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
        customDot={<CustomDot />}
      >
        <SliderBanner
          image={banner1}
          heading={heading1}
          text={text1}
          bgColor={bgColor1}
          textColor={textColor1}
        />
        <SliderBanner
          image={banner2}
          heading={heading2}
          text={text2}
          bgColor={bgColor2}
          textColor={textColor2}
        />
        <SliderBanner
          image={banner3}
          heading={heading3}
          text={text3}
          bgColor={bgColor3}
          textColor={textColor3}
        />
      </Carousel>
    </div>
  );
}

export default Banners;
