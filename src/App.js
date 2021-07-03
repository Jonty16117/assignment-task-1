import "./Styles/App.scss";
import MenuAppBar from "./Components/MenuAppBar";
import Banners from "./Components/Banners";
import FloatingReferralBtn from "./Components/FloatingReferralBtn";
import DisplayTabs from "./Components/DisplayTabs";

function App() {  
  return (
    <div>
      <MenuAppBar />
      <FloatingReferralBtn />
      <Banners />
      <DisplayTabs />
    </div>
  );
}

export default App;
