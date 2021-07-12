import React, { useState } from "react";
import styles from "../Styles/DisplayTabs.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "../Styles/DisplayTabs.css";
import OverviewTab from "./OverviewTab";
import AnalyticsTab from "./AnalyticsTab";

function DisplayTabs() {
  const [switchTab, setSwitchTab] = useState(0);

  const toggleTabs = (index, lastIndex) => {
    if (index === 0) {
      setSwitchTab(0);
    } else {
      setSwitchTab(1);
    }
  };

  return (
    <>
      <Tabs defaultIndex={0} onSelect={toggleTabs}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Analytics</Tab>
        </TabList>
      </Tabs>
      <div style={{ display: switchTab === 1 ? "block" : "none" }}>
        <AnalyticsTab />
      </div>
      <div style={{ display: switchTab === 0 ? "block" : "none" }}>
        <OverviewTab />
      </div>
    </>
  );
}

export default DisplayTabs;
