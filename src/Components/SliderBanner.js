import React from "react";
import styles from "../Styles/SliderBanner.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SliderBanner(props) {
  return (
    <div className={styles.bannerContainer}>
      <Container>
        <div
          className={styles.banner1}
          style={{ backgroundColor: props.bgColor }}
        >
          <Row noGutters={true}>
            <Col lg={3} className={styles.col1}>
              <div className={styles.imageDiv}>
                <img
                  // className="img-responsive"
                  className={styles.imageContainer1}
                  src={props.image}
                  alt="banner slide"
                />
              </div>
            </Col>
            <Col lg={9} className={styles.col1}>
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
