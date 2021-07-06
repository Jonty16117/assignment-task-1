import "./Styles/App.scss";
import MenuAppBar from "./Components/MenuAppBar";
import Banners from "./Components/Banners";
import FloatingReferralBtn from "./Components/FloatingReferralBtn";
import DisplayTabs from "./Components/DisplayTabs";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MenuAppBar />
      <div className="container">
        <FloatingReferralBtn />
        <Banners />
        <DisplayTabs />
      </div>
    </React.Fragment>
  );
}

export default App;
