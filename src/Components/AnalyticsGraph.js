import React from "react";
import styles from "../Styles/AnalyticsGraph.module.css";

function AnalyticsGraph(props) {
  return (
    // <div className={styles.root}>
    //   <img src={props.image} className={styles.imageContainer} />
    // </div>
      <img src={props.image} className={styles.imageContainer} />

  );
}

export default AnalyticsGraph;
