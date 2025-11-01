import { useEffect, useState } from "react";

const Practice = () => {
  const [ip, setIp] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ip) {
      setSuggestions([]);
      return;
    }

    let timer = setTimeout(() => {
      fetchDatas(ip);
    }, 400);

    return () => clearTimeout(timer);
  }, [ip]);

  const fetchDatas = async (ip) => {
    console.log("Searching for:", ip);
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${ip}`);
      const data = await res.json();
      setSuggestions(data.products || []);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const setTheProduct = (title) => {
    setIp(title);
    setSuggestions([]);
  };

  const getHighlight = (text) => {
    const regrex = new RegExp(`(${ip})`, "gi");
    const parts = text.split(regrex);

    return parts.map((part, index) =>
      part.toLowerCase() === ip.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {" "}
          {part}{" "}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <div>
      <h1>Product List</h1>
      <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
      {loading && <p>Loading</p>}
      <ul>
        {!loading &&
          suggestions.length > 0 &&
          suggestions.map((value, index) => (
            <li key={index} onClick={() => setTheProduct(value.title)}>
              {getHighlight(value.title)}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Practice;
