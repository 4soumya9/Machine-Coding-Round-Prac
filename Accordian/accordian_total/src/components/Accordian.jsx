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


/*openIndex === index → This checks if the current item’s index matches the open one. If yes → true, if not → false.

So effectively:
If isOpen={true} → That accordion item expands.

If isOpen={false} → That accordion item stays collapsed.
*/


/*In JavaScript, the Array.map function always passes its arguments in this order:

array.map((element, index, array) => {
  // element → the current item in the array
  // index   → the position of that item (0,1,2,…)
  // array   → the original array (optional)
})

item, index -> thats why in these index is in second
  */