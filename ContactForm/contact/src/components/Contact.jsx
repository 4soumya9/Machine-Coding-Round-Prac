import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const validate = () => {
    const newErrr = {};
    if (!form.name.trim()) {
      newErrr.name = "Name is req";
    }
    if (!form.email.trim()) {
      newErrr.email = " email is req";
    }

    return newErrr;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setSubmittedName(form.name);
      setSubmitted(true);
      setError([]);
      setForm({ name: "", email: "" });
    }
  };
  return (
    <div>
      {submitted ? (
        <h3> {submittedName}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="namee"> Name</label>
            <input
              type="text"
              id="nameee"
              name="name"
              onChange={handleChange}
            />
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange} />
            {error.email && <p>{error.email}</p>}
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
