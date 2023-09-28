import React, { useState } from "react";
import InputField from "./component/inputField";
import ValidationMessage from "./component/validation";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    setSubmitted(true);

    if (isValid) {
      console.log("Form submitted successfully:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App">
      <h1>Team1 Application Form</h1>
      <form>
        <InputField
          name="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <InputField
          name="email"
          label="Email address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {submitted && Object.keys(errors).length === 0 && (
        <p>Form submitted successfully!</p>
      )}

      <ValidationMessage message={errors.general} />
    </div>
  );
};

export default App;
