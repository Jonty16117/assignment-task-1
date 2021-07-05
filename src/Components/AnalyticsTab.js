import React from "react";
import styles from "../Styles/AnalyticsTab.module.css";
import analytics1 from "../Assets/analytics1.png";
import analytics2 from "../Assets/analytics2.png";
import analytics3 from "../Assets/analytics3.png";
import analytics4 from "../Assets/analytics4.png";
import AnalyticsGraph from "./AnalyticsGraph";

function AnalyticsTab() {
  return (
    // <div className="container" className={styles.root}>
    <div className="container" className={styles.root}>
      <div className="row justify-content-center">
        <div className="col-4">
          <img src={analytics1} className={styles.imageContainerleft} />
        </div>
        <div className="col-4">
          <img src={analytics2} className={styles.imageContainerright} />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4">
          <img src={analytics3} className={styles.imageContainerleft} />
        </div>
        <div className="col-4">
          <img src={analytics4} className={styles.imageContainerright} />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsTab;
