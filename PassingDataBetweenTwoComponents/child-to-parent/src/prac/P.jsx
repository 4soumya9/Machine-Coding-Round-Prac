import { useState } from "react";
import C from "./C";

const P = () => {
  const [childData, setChildData] = useState("");
  const handleData = (data) => {
    setChildData(data);
  };
  return (
    <div>
      <C sendData={handleData} /> 
      {/* handleData is function that accpets the data from child component.
      also handleData handles the state of the data. */}
      <p>Data from Child :{childData}</p>
    </div>
  );
};

export default P;
