import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Register = ({onAdd}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   //Add Data to Backend on Submit
   const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a task!");
      return;
    }
    onAdd({ name, email, password});
    setName("");
    setEmail("");
    setPassword("");
    <Link to="/"></Link>
  };

  return (
    <div className='right-container'>
      <form className="add-form" onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div className="form-control">
          <input
            type="text"
            placeholder={"Full Name"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <input
            type="email"
            placeholder={"Email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input type={"submit"} value="Register" className="btn btn-block" />
        <div className='divider'/>
        <button className='btn btn-register'><Link className='link' to="/">Login</Link></button>
      </form>
    </div>
  )
}

export default Register
