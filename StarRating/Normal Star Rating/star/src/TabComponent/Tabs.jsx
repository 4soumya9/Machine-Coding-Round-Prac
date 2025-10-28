import React, { useState } from "react";
import "../App.css";
const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (tabs.length === 0) {
    return <div>No taks</div>;
  }
  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`tab ${activeIndex === index ? "active" : ""}`}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeIndex]?.content || " No content"}
      </div>
    </div>
  );
};

export default Tabs;
