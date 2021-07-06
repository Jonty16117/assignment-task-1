import React from "react";
import styles from "../Styles/OverviewTab.module.css";
import trophy from "../Assets/trophy.png";
import download from "../Assets/download.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RefRevCard from "./RefRevCard";
import RefTable from "./RefTable";
import sliderImage1 from "../Assets/sliderImage1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
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
        <div className={styles.bannerContainer1}>
          <div className={styles.text}>
            <b>Referral Revenue</b>
            <br />
            <p>in Last 7 Days</p>
            <img src={sliderImage1} className={styles.imageContainer1} />
          </div>
          <button className={styles.viewBtn}>View {">"}</button>
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
      <Container>
        <Row className={styles.root2}>
          <Col sm={3} className={styles.col1}>
            <img src={trophy} className={styles.trophy} />
            <p className={styles.refText}>All Referral Programs&nbsp;&nbsp;</p>
          </Col>
          <Col sm={3} className={styles.col2}>
            <div className={styles.showInAnalytics}>Show in Analytics</div>
          </Col>
          <Col sm={6} className={styles.col3}>
            <div className="d-flex justify-content-end">
              <div className={styles.downloadDiv}>
                <img src={download} className={styles.downloadImg} />
                <div className={styles.downloadText}>
                  &nbsp;Download PDF/CSV
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.tableContainer}>
        <RefTable />
      </div>
    </div>
  );
}

export default OverviewTab;
