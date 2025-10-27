import React, { useEffect, useState } from "react";

const WordCounter = () => {
  const [count, setCount] = useState([]);
  const [input, setInput] = useState("");
  function handleCount() {
    let map = new Map();
    const cleanWords = input
      .toLowerCase()
      .replace(/[^a-zA-Zs]g/, "")
      .trim();
    const words = cleanWords.split(/\s+/).filter((word) => word !== "");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      map.set(word, (map.get(word) || 0) + 1);
    }

    const sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    setCount(sortedArray);
  }

  useEffect(() => {
    handleCount();
  }, [input]);
  return (
    <div>
      <textarea
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      {count.length > 0 && (
        <div>
          <h3>Word Counter</h3>
          <ul>
            {count.map(([word, count]) => (
              <li key={word}>
                {/* {word}: count 
                {count} */}
                <strong>{word} count</strong>: {count} Times
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordCounter;
