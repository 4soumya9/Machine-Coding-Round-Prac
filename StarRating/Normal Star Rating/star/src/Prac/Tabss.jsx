import React, { useState } from "react";

const tabsData = [
  { title: "Tab 1", content: "This is the content of Tab 1" },
  { title: "Tab 2", content: "This is the content of Tab 2" },
  { title: "Tab 3", content: "This is the content of Tab 3" },
];
const Tabss = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div>
        {tabsData.map((value, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`tab ${activeIndex === index ? "activee" : ""}`}
          >
            {value.title}
          </div>
        ))}
      </div>
      <div>{tabsData[activeIndex].content}</div>
    </div>
  );
};

export default Tabss;
