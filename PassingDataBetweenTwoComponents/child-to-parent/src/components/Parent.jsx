import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childData, setChildData] = useState("");

  const handleData = (data) => {
    setChildData(data);
  };
  return (
    <div>
      <Child sendData={handleData} />
      <p>Data from child : {childData}</p>
    </div>
  );
};

export default Parent;

/*Explanation:

Parent passes a function handleData as a prop to the child.

Child calls this function with data when needed, updating the parent state.*/