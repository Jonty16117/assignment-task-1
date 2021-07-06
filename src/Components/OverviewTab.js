import React from "react";
import styles from "../Styles/OverviewTab.module.css";
import trophy from "../Assets/trophy.png";
import download from "../Assets/download.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RefTable from "./RefTable";
import sliderImage1 from "../Assets/sliderImage1.png";
import sliderImage2 from "../Assets/sliderImage2.png";
import sliderImage3 from "../Assets/sliderImage3.png";
import analyticsBtn from "../Assets/analyticsBtn.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverviewBanner from "./OverviewBanner";

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

//banner 1
let heading1 = "Referral Revenue";
let text1 = "in Last 7 Days";
let bgColor1 = "#8DD8A8";

//banner 2
let heading2 = "Revenue";
let text2 = "on each $ spent";
let bgColor2 = "#F6BCCA";

//banner 3
let heading3 = "Conversion Rate";
let text3 = "";
let bgColor3 = "#AEB0E9";

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
        <OverviewBanner
          image={sliderImage1}
          heading={heading1}
          text={text1}
          bgColor={bgColor1}
        />
        <OverviewBanner
          image={sliderImage2}
          heading={heading2}
          text={text2}
          bgColor={bgColor2}
        />
        <OverviewBanner
          image={sliderImage3}
          heading={heading3}
          text={text3}
          bgColor={bgColor3}
        />
      </Carousel>

      <Container>
        <Row className={styles.root2}>
          <Col sm={3} className={styles.col1}>
            <img src={trophy} className={styles.trophy} />
            <p className={styles.refText}>All Referral Programs&nbsp;&nbsp;</p>
          </Col>
          <Col sm={3} className={styles.col2}>
            <button className={styles.showInAnalytics}>
              <img src={analyticsBtn} className={styles.analyticsBtnImg}/>
              Show in Analytics
            </button>
          </Col>
          <Col sm={6} className={styles.col3}>
            <div className="d-flex justify-content-end">
              <button className={styles.downloadDivBtn}>
                <img src={download} className={styles.downloadImg} />
                <div className={styles.downloadText}>
                  &nbsp;Download PDF/CSV
                </div>
              </button>
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
