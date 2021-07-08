import React from "react";
import styles from "../Styles/FloatingReferralBtn.module.css";

function FloatingReferralBtn() {
  return (
    // <div style={{
    //   float: "right"
    // }}>
    <div className={styles.root}>
      {/* Create New Referral Program */}
      {/* <div className={styles.circle} /> */}
      <div className={styles.container}>
        <div className={styles.plusButton} />
        <div className={styles.text}>Create New Referral Program</div>
        {/* <div className={styles.text}></div> */}
        {/* <a href="#"> */}
        {/* </a> */}
      </div>
    </div>
  );
}

export default FloatingReferralBtn;
