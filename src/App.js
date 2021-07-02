import "./Styles/App.scss";
import MenuAppBar from "./Components/MenuAppBar";
import Banners from "./Components/Banners";
import FloatingReferralBtn from "./Components/FloatingReferralBtn";

function App() {  
  return (
    <div>
      <MenuAppBar />
      <FloatingReferralBtn />
      <Banners />
    </div>
  );
}

export default App;
