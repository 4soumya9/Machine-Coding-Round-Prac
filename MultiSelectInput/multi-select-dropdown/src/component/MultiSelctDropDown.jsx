import React, { useEffect, useRef, useState } from "react";
const Options = [
  "option1",
  "option2",
  "option11",
  "option12",
  "option13",
  "option14",
  "option15",
  "option10",
  "option5",
];
const MultiSelctDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };


  const handleSelect = (option) => {
  setSelectedOptions((prev) => {
    const newSelected = prev.includes(option)
      ? prev.filter((item) => item !== option)
      : [...prev, option];
    setResult(newSelected);
    return newSelected;
  });
};

  const handleReset = () => {
    setSelectedOptions([]);
    setError("");
    setResult("");
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) {
      setError("Please select at least one");
      setResult("");
    } else {
      setError("");
      setResult(selectedOptions);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <h1>MultiSelctDropDown</h1>
      <label>Select Options</label>
      <div ref={dropdownRef}>
        <button onClick={toggleDropDown}>
          <span>
            {selectedOptions.length > 0
              ? `${selectedOptions.length} selected`
              : "choose options"}
          </span>
        </button>
        {isOpen && (
          <ul>
            <li onClick={handleReset}>Reset</li>
            {Options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`drop-down-option ${
                  selectedOptions.includes(option) ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  readOnly
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>{result && <div> Selected : {result.join(",")}</div>}</div>
      <div>{error && <div> {error}</div>}</div>
    </div>
  );
};

export default MultiSelctDropDown;
