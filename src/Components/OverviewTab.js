import React from "react";
import styles from "../Styles/OverviewTab.module.css";
import trophy from "../Assets/trophy.jpg";
import download from "../Assets/download.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RefRevCard from "./RefRevCard";
import RefTable from "./RefTable";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
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

function OverviewTab() {
  return (
    <div className={styles.root}>
      <Carousel
        responsive={responsive}
        showDots={false}
        draggable={true}
        infinite={false}
        swipeable={true}
        removeArrowOnDeviceType={["mobile"]}
      >
        <div className={styles.bannerContainer}>
          <RefRevCard />
        </div>
        <div className={styles.bannerContainer}>
          <RefRevCard />
        </div>
        <div className={styles.bannerContainer}>
          <RefRevCard />
        </div>
        <div className={styles.bannerContainer}>
          <RefRevCard />
        </div>
      </Carousel>
      <div className={styles.root2}>
        <img src={trophy} className={styles.trophy} />
        <b className={styles.refText}>All Referral Programs&nbsp;&nbsp;</b>
        <div className={styles.showInAnalytics}>Show in Analytics</div>
        <div className={styles.downloadDiv}>
          <img src={download} className={styles.downloadImg} />
          <div className={styles.downloadText}>&nbsp;Download PDF/CSV</div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <RefTable />
      </div>
    </div>
  );
}

export default OverviewTab;
