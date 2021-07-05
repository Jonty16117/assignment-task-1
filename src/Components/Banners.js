import React from "react";
import banner1 from "../Assets/banner1.png";
import banner2 from "../Assets/banner2.png";
import banner3 from "../Assets/banner3.png";
import styles from "../Styles/Banners.module.css";
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
      >
        <div className={styles.bannerContainer}>
          {" "}
          <div className={styles.banner1}>
            <img
              className={styles.imageContainer1}
              src={banner1}
              alt="First slide"
            />
            <div className={styles.bannerHeading1}> Pro Tip #1:</div>
            <div className={styles.bannerText1}>
              A / B Test Your Referral Program.Start Creating new Referral
              Program to find out which referral program strategy brings most of
              the revenue to your Business.{" "}
            </div>
          </div>
        </div>

        <div className={styles.bannerContainer}>
          {" "}
          <div className={styles.banner2}>
            <img
              className={styles.imageContainer2}
              src={banner2}
              alt="Second slide"
            />
            <div className={styles.bannerHeading2}> Pro Tip #2:</div>
            <div className={styles.bannerText2}>
              Test out your Referral Program .It will give you a journey map of
              what your customers will see before the referral program is even
              live.{" "}
            </div>
          </div>
        </div>

        <div className={styles.bannerContainer}>
          {" "}
          <div className={styles.banner3}>
            <img
              className={styles.imageContainer3}
              src={banner3}
              alt="Third slide"
            />
            <div className={styles.bannerHeading3}> Pro Tip #3:</div>
            <div className={styles.bannerText3}>
              Customize rewards, decide what an advocate will get referring your
              Product and What Referred friend will get.{" "}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banners;
