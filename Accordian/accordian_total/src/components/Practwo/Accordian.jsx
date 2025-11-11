import React, { useState } from "react";

const faqs = [
  {
    question: "What is this app about?",
    answer: "This app helps users track and improve their daily habits.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login screen and follow instructions.",
  },
  {
    question: "Can I use this app offline?",
    answer: "Yes, some features are available offline after the initial setup.",
  },
];

const Accordian = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleIndex = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
  };
  return (
    <div>
      {faqs.map((faq, index) => (
        <div>
          <button onClick={() => handleIndex(index)} key={index}>
            {" "}
            {faq.question}
          </button>
          {currentIndex === index && <p>{faq.answer} </p>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
