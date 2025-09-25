import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const message = "Hello from Pareant";
  return (
    <div>
      <ChildComponent msg={message} />
    </div>
  );
};

export default ParentComponent;

/*✅ Explanation:

ParentComponent passes message as a prop called msg to ChildComponent.

Child receives it via { msg } and displays it.*/