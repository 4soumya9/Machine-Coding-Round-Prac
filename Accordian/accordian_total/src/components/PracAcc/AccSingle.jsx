import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "../../index.css";

const AccSingle = () => {
  //   const [isOpenIndex, setIsOpenIndex] = useState(null);
  const [multi, setMulti] = useState([]);

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

  //   const toggle = (index) => {
  //     setIsOpenIndex(isOpenIndex === index ? null : index);
  //   };

  const mulToogle = (index) => {
    if (multi.includes(index)) {
      setMulti(multi.filter((i) => i !== index));
    } else {
      setMulti([...multi, index]);
    }
  };
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          //   isOpen={isOpenIndex === index}
          //   onClick={() => toggle(index)}
          isOpen={multi.includes(index)}
          onClick={() => mulToogle(index)}
        />
      ))}
    </div>
  );
};

export default AccSingle;
