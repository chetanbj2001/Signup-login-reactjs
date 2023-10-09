import React from 'react'
import { Route, Routes } from "react-router-dom";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import DashBoard from './components/DashBoard';


const App = () => {


  return (
    <div className='App'>
      <h1>Authentication Demo</h1>
      <Routes>
        <Route path="/" element={<SignupForm />}></Route>
        <Route path="/login" element={<LoginForm   />}></Route>
         <Route path="/home" element={<DashBoard />}></Route>  
      </Routes>
    </div>
  )
}

export default App