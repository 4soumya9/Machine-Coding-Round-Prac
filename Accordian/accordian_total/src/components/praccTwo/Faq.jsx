import { useState } from "react";

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

function Fq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Faq</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => toggle(index)}>
            <p>{faq.question}</p>
            {openIndex === index ? "Up" : "Down"}
          </button>
          {openIndex === index ? faq.answer : ""}
        </div>
      ))}
    </div>
  );
}

export default Fq;
