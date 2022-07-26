import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";

const Register = ({onAdd}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [field, setField] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  
   //Add Data to Backend on Submit
   const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setField(true);
      return;
    }
    onAdd({ name, email, password});
    setName("");
    setEmail("");
    setPassword("");
    <Link to="/"></Link>
  };

  const togglePassword = () => {
    setPasswordState(prevState => !prevState);
  }

  return (
    <div className='body'>
      <div className='right-container'>
        <form className="add-form" onSubmit={onSubmit}>
          <h1>Sign Up</h1>
          <div className="form-control">
          <span className='icon'><FaUserAlt/></span>
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
          <span className='icon'><FaEnvelope/></span>
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
          <span className='icon'><FaLock/></span>
            <input
              type={passwordState? "text" : "password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className='icon-eye' onClick={togglePassword}>{passwordState ? <AiFillEye/> :<AiFillEyeInvisible/>}</span>
          </div>
          {field ? <div  className='forget'>Fill the fields !</div> : ""}
          <input type={"submit"} value="Register" className="btn btn-block" />
          <div className='divider'/>
          <button className='btn btn-register'><Link className='link' to="/">Login</Link></button>
        </form>
      </div>
    </div>
  )
}

export default Register
