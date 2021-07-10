import React from "react";
import styles from "../Styles/WeightageSelector.module.css";
import Dropdown from "react-bootstrap/Dropdown";

function WeightageSelector(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className={styles.root}>
        {props.AudienceWeightage}%
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">0%</Dropdown.Item>
        <Dropdown.Item href="#/action-2">25%</Dropdown.Item>
        <Dropdown.Item href="#/action-3">50%</Dropdown.Item>
        <Dropdown.Item href="#/action-3">75%</Dropdown.Item>
        <Dropdown.Item href="#/action-3">100%</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default WeightageSelector;
