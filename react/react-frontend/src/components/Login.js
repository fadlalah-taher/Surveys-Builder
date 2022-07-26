import { useState} from 'react';
import { Link } from "react-router-dom";

//import Register from './Register';
import axios from 'axios';

import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = ({addTask}) => {
    const [email , setEmail] = useState("");
    const [password , setPwd] = useState("");

    const [field, setField] = useState(false);
    const [passwordState, setPasswordState] = useState(false);

    async function onLogin(e){
      e.preventDefault();
      let item = {email,password};

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/v1/login',
        data: item,
    })
    .then(function (response) {
      var token = response.data["access_token"];
      localStorage.setItem("access_token", token);

      axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/profile',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept':'application/json'
      },
    })
    .then(function(response){
      let user_id = response.data["id"]
      let type = response.data["type"]
      console.log(type);
      console.log(user_id);
      if(type === 1){
        window.location = "/AddSurvey";
      }
      else{
        window.location = "/DisplaySurvey";
      }
    })
    }).catch(function(response){
      setField(true);
    })
}

  const togglePassword = () => {
    setPasswordState(prevState => !prevState);
  }

  return (
    <div className='body'>
      <div className='right-container'>
        <form className="add-form" onSubmit={onLogin}>
          <h1>Login</h1>
          <div className="form-control">
          <span className='icon'><FaEnvelope/></span>
            <input
              type="text"
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
              type={passwordState ? "text" : "password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            <span className='icon-eye' onClick={togglePassword}>{passwordState ? <AiFillEye/> :<AiFillEyeInvisible/>}</span>
          </div>
          {field ? <div  className='forget'>Invalid email or password!</div> : ""}
          <input type={"submit"} value="Login" className="btn btn-block" />
          <div className='divider'/>
          <button className='btn btn-register'><Link className='link' to="/Register">Register</Link></button>
        </form>
      </div>
    </div>
  )
}

export default Login
