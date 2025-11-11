import { useState } from "react";

const Accordian = () => {
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
      answer:
        "Yes, some features are available offline after the initial setup.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  
  return <div></div>;
};

export default Accordian;
