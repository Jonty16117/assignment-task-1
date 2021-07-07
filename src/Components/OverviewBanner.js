import React from "react";
import styles from "../Styles/OverviewBanner.module.css";

function OverviewBanner(props) {
  return (
    <div
      className={styles.bannerContainer1}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className={styles.text}>
        <b>{props.heading}</b>
        <br />
        {props.text.length === 0 ? (
          <p style={{ color: props.bgColor }}>.</p>
        ) : (
          <p>{props.text}</p>
        )}
      </div>
      <div className={styles.imageContainer}>
        <img src={props.image} className={styles.image} />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.viewBtn}>View {">"}</button>
      </div>
    </div>
  );
}
export default OverviewBanner;
