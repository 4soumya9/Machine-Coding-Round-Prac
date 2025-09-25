import React from "react";

const Child = ({ sendData }) => { // this function name should be same as name passed in the Parent Component
  return (
    <div>
      <button onClick={() => sendData("Hello from Child")}>
        Send data to parent
      </button>
    </div>
  );
};

export default Child;


/*Explanation:

Parent passes a function handleData as a prop to the child.

Child calls this function with data when needed, updating the parent state.*/