import React from "react";
import styles from "../Styles/FloatingReferralBtn.module.css";

function FloatingReferralBtn() {
  return (
    <div className={styles.root}>
        <div className={styles.plusButton} />
        <div className={styles.text} >
            Create New Referral Program
        </div>
    </div>
  );
}

export default FloatingReferralBtn;
