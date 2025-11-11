import React, { useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(0);
  
  const updateProgress = (delta) => {
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  const getBarColor = () => {
    if (progress < 30) {
      return "red";
    }
    if (progress < 60) {
      return "blue";
    }
    return "green";
  };
  return (
    <div>
      <div style={{ width: `${progress}%`, background: getBarColor() }}>
        <span>{progress}%</span>
      </div>
      <div>
        <button onClick={() => updateProgress(-10)}>-10%</button>
        <button onClick={() => updateProgress(10)}>10%</button>
      </div>
    </div>
  );
};

export default Progress;
