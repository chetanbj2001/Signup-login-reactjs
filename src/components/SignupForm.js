import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
import userdetails from '../userdetails';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    password: '',
    mobileNumber: '',
  });

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMg, setErrorMg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.useremail || !formData.mobileNumber) {
      setError(true);
      setErrorMg("Please enter all required fields");
    }
    else if (!/\S+@\S+\.\S+/.test(formData.useremail)) {
      setError(true);
      setErrorMg("please enter a valid email address like (user@gmail.com) and try again");
    }
    else if (formData.password.length < 6) {
      setError(true);
      setErrorMg("Invalid password, please enter 6 characters or more");
    }
    else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      setError(true);
      setErrorMg("Invalid mobile number, please enter 10 digits");
    }
    else {
      const newUser = {
        username: formData.username,
        // useremail: formData.useremail,
        password: formData.password,
      };

      userdetails.push(newUser);
      console.log(userdetails);

      setSubmitted(true);
      setError(false);
      alert("Registration successful");
      navigate("/login");
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none' }}>
        <h1>User {formData.username} successfully registered!!</h1>

      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <h1>{errorMg}</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          name="username"
          onChange={handleInputChange}
          className="input"
          value={formData.username}
          type="text"
        />

        <label className="label">Email</label>
        <input
          name="useremail"
          onChange={handleInputChange}
          className="input"
          value={formData.useremail}
          type="email"
        />

        <label className="label">Mobile No</label>
        <input
          name="mobileNumber"
          onChange={handleInputChange}
          className="input"
          value={formData.mobileNumber}
          type="tel"
        />

        <label className="label">Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          className="input"
          value={formData.password}
          type="password"
        />

        <button className="btn" type="submit">
          Submit
        </button>

        <p>Already have an account?</p>
        <Link to="login" style={{ backgroundColor: "white", color: "red", paddingBottom: "10px" }}>Log in </Link>


      </form>
    </div>
  );
};

export default SignupForm;
