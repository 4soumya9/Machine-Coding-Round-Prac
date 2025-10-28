import React from "react";

const Input = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    alert(`You have selected: ${file.name}`);

    if (!file.type.startsWith("image/")) {
      alert("wrong");
      event.target.value = "";
      return;
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default Input;
