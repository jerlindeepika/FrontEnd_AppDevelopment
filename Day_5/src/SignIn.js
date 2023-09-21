import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const navigate = useNavigate(); // Move it to the top level of the component

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
    // Clear any previous validation errors when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const { email, password } = state;
    const newErrors = {};

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Validate password
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      const { email, password } = state;

      // Perform your authentication logic here (e.g., API call)
      // If authentication is successful, push to the home page
      // Replace the condition below with your actual authentication logic
      if (email === "valid@email.com" && password === "validpassword") {
        const username = "valid@email.com";
        setState({
          email: "",
          password: "",
        });

        // Push to the home page
        navigate("/Home", { state: { username } }); // Use the navigate function here
      } else {
        // Handle authentication failure (show error message, etc.)
        alert("Authentication failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          {/* ... (social login buttons) ... */}
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
