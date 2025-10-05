import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Maincontainer from "./components/Maincontainer";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Maincontainer />
        <LeftSidebar />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
