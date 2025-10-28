import "./App.css";
import StarRating from "./Component/StarRating";
import Tabs from "./TabComponent/Tabs";

const tabsData = [
  { title: "Tab 1", content: "This is the content of Tab 1" },
  { title: "Tab 2", content: "This is the content of Tab 2" },
  { title: "Tab 3", content: "This is the content of Tab 3" },
];
function App() {
  return (
    <div>
      {/* <StarRating /> */}
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default App;
