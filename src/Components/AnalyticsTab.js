import React from "react";
import styles from "../Styles/AnalyticsTab.module.css";
import analytics1 from "../Assets/analytics1.png";
import analytics2 from "../Assets/analytics2.png";
import analytics3 from "../Assets/analytics3.png";
import analytics4 from "../Assets/analytics4.png";
import AnalyticsGraph from "./AnalyticsGraph";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AnalyticsTab() {
  return (
    <Container>
      <Row noGutters={true}>
        <Col lg={6}>
          <div className="d-flex justify-content-center">
            <img src={analytics1} className={styles.imageContainerleft} />
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-center">
            <img src={analytics2} className={styles.imageContainerleft} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="d-flex justify-content-center">
            <img src={analytics3} className={styles.imageContainerleft} />
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-center">
            <img src={analytics4} className={styles.imageContainerleft} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AnalyticsTab;
