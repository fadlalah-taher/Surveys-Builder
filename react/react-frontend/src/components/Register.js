import React from 'react'
import { useState } from "react";

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
    onAdd({ name,email, password});
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='right-container'>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Full Name</label>
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
          <label>Email</label>
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
          <label>Password</label>
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
      </form>
    </div>
  )
}

export default Register
