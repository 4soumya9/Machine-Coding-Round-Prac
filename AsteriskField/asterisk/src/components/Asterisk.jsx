import React, { useState } from "react";
// import "./App.css";
const Asterisk = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState({ name: false, location: false });
  const [sucessMessage, setSucessMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErros = {
      name: name.trim() === "",
      location: location.trim() === "",
    };
    setErrors(newErros);

    if (!newErros.name && !newErros.location) {
      setSucessMessage(`${name}`);
    } else {
      setSucessMessage("");
    }
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <div>
          <input
            className={`input ${errors.name ? "input-error" : ""}`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>Name is req</span>}
        </div>
        <div>
          <input
            className={`input ${errors.location ? "input-error" : ""}`}
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && <span>location is req</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {sucessMessage && <p>{sucessMessage}</p>}
    </div>
  );
};

export default Asterisk;
