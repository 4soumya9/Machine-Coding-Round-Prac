import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const AccordianMulti = () => {
  const [openIndex, setOpenIndex] = useState([]);
  const data = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building UIs.",
    },
    {
      title: "Why use React?",
      content: "It helps build fast and interactive applications.",
    },
    {
      title: "How does React work?",
      content: "It uses a virtual DOM for efficient UI updates.",
    },
  ];

  const toggleAccordian = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };
  return (
    <div className="accordian">
      {" "}
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          {...item}
          onClick={() => toggleAccordian(index)}
          isOpen={openIndex.includes(index)}
        />
      ))}
    </div>
  );
};

export default AccordianMulti;
