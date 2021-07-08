import React from "react";
import styles from "../Styles/DisplayTabs.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "../Styles/DisplayTabs.css";
import OverviewTab from "./OverviewTab";
import AnalyticsTab from "./AnalyticsTab";

function DisplayTabs() {
  return (
    <div className={styles.root}>
      <Tabs defaultIndex={0} >
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Analytics</Tab>
        </TabList>
        <TabPanel>
          <OverviewTab />
        </TabPanel>
        <TabPanel>
          <AnalyticsTab />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DisplayTabs;
