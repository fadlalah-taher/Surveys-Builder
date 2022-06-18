import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import Register from './Register';

const Login = ({addTask}) => {
    const [email , setEmail] = useState("");
    const [password , setPwd] = useState("");
    //const [user , setUser] = useState("");

    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   if (!email) {
    //     alert("Please add a task!");
    //     return;
    //   }
    //   onAdd({email, pwd});
    //   setEmail("");
    //   setPwd("");
    // };
    async function onLogin(e){
      e.preventDefault();
      let item = {email,password};
      console.log(item);
      const res = await fetch("http://127.0.0.1:8000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(item),
    }).catch(function(error) {  

      console.log('Request failed', error)  
    })
    const data = await res.json();
    console.log(data['access_token']);
    console.log(data);
   // setUsers([...users, data]);
}

  return (
    <div className='right-container'>
      <form className="add-form" onSubmit={onLogin}>
        <div className="form-control">
          {/* <label>Email</label> */}
          <input
            type="text"
            placeholder={"Full Name"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          {/* <label>Password</label> */}
          <input
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div  className='forget'>Invalid email or password!</div>
        <input type={"submit"} value="Login" className="btn btn-block" />
        <div className='divider'/>
        <button className='btn btn-register'><Link className='link' to="/Register">Register</Link></button>
      </form>
    </div>
  )
}

export default Login
