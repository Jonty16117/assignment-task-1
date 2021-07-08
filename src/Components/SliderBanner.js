import React from "react";
import styles from "../Styles/SliderBanner.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/SliderBanner.css";

function SliderBanner(props) {
  return (
    <div className={styles.bannerContainer}>
      <Container>
        <div
          className={styles.banner1}
          style={{ backgroundColor: props.bgColor }}
        >
          <Row noGutters={true} className={styles.noPadding}>
            <Col xs={3} lg={3} className={styles.noPadding}>
              <div className={styles.imageDiv}>
                <img
                  // className="img-responsive"
                  className={styles.imageContainer1}
                  src={props.image}
                  alt="banner slide"
                />
              </div>
            </Col>
            <Col xs={9} lg={9} className={styles.noPadding}>
              <div
                className={styles.bannerText}
                style={{ color: props.textColor }}
              >
                <div className={styles.bannerHeading1}>{props.heading}</div>
                <div className={styles.bannerText1}>{props.text}</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default SliderBanner;
