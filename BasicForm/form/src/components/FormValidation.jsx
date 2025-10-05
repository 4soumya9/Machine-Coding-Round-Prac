import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // toggle state

  const validate = (field, value) => {
    let errorMsg = "";

    if (field === "name") {
      if (!value.trim()) {
        errorMsg = "Name is req";
      } else if (value.length < 3) {
        errorMsg = "Name at least 3 char";
      }
    }

    if (field === "email") {
      const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value.trim()) {
        errorMsg = "Email is req";
      } else if (!emailRegrex.test(value)) {
        errorMsg = "Enter valid email";
      }
    }

    if (field === "password") {
      if (!value.trim()) {
        errorMsg = "Password is req";
      } else if (value.length < 6) {
        errorMsg = "Password must be 6 char";
      }
    }

    return errorMsg;
  };

  return <div>FormValidation</div>;
};

export default FormValidation;
