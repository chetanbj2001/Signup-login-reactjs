import React from 'react'
import { useState } from 'react';
import userdetails from '../userdetails';
import { useNavigate,Link } from 'react-router-dom';
import '../App.css';

const LoginForm = () => {

  // const location = useLocation();
  // const { users } = location.state || {};

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleLoginName = (e) => {
    setLoginName(e.target.value);
  }


  const handleLoginPaswword = (e) => {
    setLoginPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Correct:", userdetails); // Log the result to the console


    const userCorrect = userdetails.find((u) => u.username === loginName && u.password === loginPassword);


    console.log("loginName:", loginName);
    console.log("loginPassword:", loginPassword);
    console.log("userdetails:", userdetails);
    console.log("User Correct:", userCorrect); // Log the result to the console


    if (userCorrect) {
      navigate('/home');
    } else {
      setError(true);
      // alert("no login");
      setLoginName("");
      setLoginPassword("");
    }

    // console.log("Username:", loginName);
    // console.log("Password:", loginPassword);



  }

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <h1>Please enter Valid fields</h1>
      </div>
    );
  };

  return (
    <div>

      <h1>LoginForm</h1>

      <div className="messages">
        {errorMessage()}
      </div>

      <form>
        <label className='label'>UserName</label>
        <input className='input' type='text' value={loginName} placeholder='name' onChange={handleLoginName}></input>

        <label className='label'>UserPassword</label>
        <input className='input' type='password' value={loginPassword} placeholder='password' onChange={handleLoginPaswword}></input>

        <button onClick={handleSubmit} className="btn"
          type="submit">
          Submit
        </button>

        <p>New User?</p>
        <Link to="/" style={{ backgroundColor: "white", color: "red", paddingBottom: "10px" }}>Creat account</Link>

      </form>


    </div>
  )
}

export default LoginForm