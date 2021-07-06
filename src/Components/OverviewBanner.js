import React from "react";
import styles from "../Styles/OverviewBanner.module.css";

function OverviewBanner(props) {
  console.log("text length", props.text.length);
  return (
    <div
      className={styles.bannerContainer1}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className={styles.text}>
        <b>{props.heading}</b>
        <br />
        {props.text.length === 0 ? <p style={{color:props.bgColor}}>.</p> : <p>{props.text}</p>}
      </div>
        <img src={props.image} className={styles.imageContainer1} />
      <button className={styles.viewBtn}>View {">"}</button>
    </div>
  );
}
export default OverviewBanner;
