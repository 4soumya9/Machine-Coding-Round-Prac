import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import "../App.css";
const Accordian = () => {
  //For single opening
  const [openIndex, setOpenIndex] = useState(null);

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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordian">
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          {...item}
          isOpen={openIndex === index}
          onClick={() => toggleAccordian(index)}
        />
      ))}
    </div>
  );
};

export default Accordian;
