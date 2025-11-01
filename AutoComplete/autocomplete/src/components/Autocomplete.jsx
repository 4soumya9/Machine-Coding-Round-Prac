import React, { useEffect, useState } from "react";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!input) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      console.log("✅ Debounce complete → calling fetchData()");
      fetchData(input);
    }, 1000);

    return () => {
      console.log("🧹 Clearing previous timer before next keystroke");
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async (searchTerm) => {
    console.log("Searching for:", searchTerm);
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      const data = await res.json();
      console.log(data.products);
      console.log(data);
      setSuggestions(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const setProduct = (title) => {
    setInput(title);
    setSuggestions([]);
  };

  const highLight = (text) => {
    const regrex = new RegExp(`(${input})`, "gi");
    const parts = text.split(regrex);

    return parts.map((part, index) =>
      part.toLowerCase() === input.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {loading && <p>Loading</p>}

      {!loading && (
        <ul>
          {suggestions?.map((item, index) => (
            <li key={index} onClick={() => setProduct(item.title)}>
              {highLight(item.title)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

// https://dummyjson.com/products/search?q=${inputVal}
