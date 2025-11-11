import { useState } from "react";

const Count = () => {
  const [maxlength, setMaxlength] = useState(50);
  const [text, setText] = useState("");
  const currentLength = text.length;
  const warning = Math.floor(maxlength * 0.6);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleMaxLength = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setMaxlength(value);
    }
  };
  let warningMsg = "";
  let errorMsg = "";

  if (currentLength > maxlength) {
    const exceed = currentLength - maxlength;
    errorMsg = `Limit exceed ${exceed} by char`;
  } else if (currentLength < maxlength && currentLength >= warning) {
    warningMsg = "warning";
  }

  return (
    <div>
      {" "}
      <input type="number " value={maxlength} onChange={handleMaxLength} />
      <textarea onChange={handleTextChange} value={text}></textarea>
      <div>{currentLength}</div>
      <div>
        {currentLength}/{maxlength}
      </div>
      {errorMsg && <p>{errorMsg}</p>}
      {warningMsg && <p>{` ${warningMsg}: Max Limit ${maxlength}`}</p>}
    </div>
  );
};

export default Count;
