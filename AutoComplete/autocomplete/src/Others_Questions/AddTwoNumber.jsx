import { useState } from "react";

// Create a button that adds two input fields.
// When numbers are entered, show their sum.
// On pressing the "Add" button again, it should add two new input fields - each pair should work independently.

function Add() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [res, setRes] = useState("");
  const handleAdd = () => {
    if (!Number(input1) || !Number(input2)) {
      setRes("Invalid input");
      setInput2("");
      setInput1("");
      return;
    }
    let i1 = Number(input1);
    let i2 = Number(input2);
    const ress = i1 + i2;
    setRes(ress);
    setInput2("");
    setInput1("");
  };
  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      <div>Result : {res}</div>
    </div>
  );
}

export default Add;
