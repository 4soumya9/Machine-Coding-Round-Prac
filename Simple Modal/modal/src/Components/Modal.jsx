import React, { useState } from "react";

const Modal = () => {
  const [isopen, setIsopen] = useState(false);
  const handleOpen = () => {
    setIsopen(true);
  };
  const handleClose = () => {
    setIsopen(false);
  };
  return (
    <div>
      <h1>Modal</h1>
      <button onClick={handleOpen}>Open Modal</button>
      {isopen && (
        <div className="overlay" onClick={handleClose}>
          <div onClick={(e) => e.stopPropagation()}>
            <h2>Modal Header</h2>
            <button onClick={handleClose}>close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
