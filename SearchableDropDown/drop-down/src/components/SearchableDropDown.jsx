import React, { useEffect, useRef, useState } from "react";
import "./Search.css";

const SearchableDropDown = ({ options, placeholder = "Select an option" }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedValue, setSelectedValue] = useState(null);

  //   const [selectdvalues, setSelectedValues] = useState([]);

  const dropdownRef = useRef(null);

  //Filter options based on input : single
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  //to hide already-selected options from the dropdown  : multi
  //   const filteredOptions = options.filter((option) => {
  //     let matchedSearch = option.toLowerCase().includes(inputValue.toLowerCase());
  //     let notSelected = !selectdvalues.includes(option);
  //     return matchedSearch && notSelected;
  //   });

  //Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) {
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredOptions[highlightedIndex]);
    }
  };

  const handleSelect = (value) => {
    setSelectedValue(value);

    // for multi
    // if (!selectdvalues.includes(value)) {
    //   setSelectedValues([...selectdvalues, value]);
    // }
    // setInputValue("");
    setInputValue(value);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  // Remove the particular tag for multi
  //   const removeTag = (value) => {
  //     setSelectedValues(selectdvalues.filter((item) => item !== value));
  //   };

  const clearSelection = () => {
    setSelectedValue(null);
    // setSelectedValues([]);
    setInputValue("");
    setIsOpen(false);
  };
  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="input-wrapper">
        {/* For multi , just map over the selected values and render tags before input */}
        {/* {selectdvalues.map((value) => (
          <span key={value} className="tag">
            {value}
            <button onClick={() => removeTag(value)}>X</button>
          </span>
        ))} */}
        <input
          type="text"
          className="dropdown-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {selectedValue && (
          <button className="clear" onClick={clearSelection}>
            X
          </button>
        )}
        {/* more multi */}
        {/* {selectdvalues.length > 0 && (
          <button className="clear" onClick={clearSelection}>
            Clear All
          </button>
        )} */}
      </div>

      {/* dropdown list  */}

      {isOpen && filteredOptions.length > 0 && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              className={`dropdown-item ${
                index === highlightedIndex ? "highlighted" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {isOpen && filteredOptions.length === 0 && (
        <div className="no-options"> No results </div>
      )}
    </div>
  );
};

export default SearchableDropDown;
