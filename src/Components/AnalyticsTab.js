import React from "react";
import styles from "../Styles/AnalyticsTab.module.css";

function AnalyticsTab() {
  return (
    <div className={styles.root}>
        <div className={styles.plusButton} />
        <div className={styles.text} >
            Create New Referral Program
        </div>
    </div>
  );
}

export default AnalyticsTab;
