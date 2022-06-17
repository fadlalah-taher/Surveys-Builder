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
      const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(item),
    });
    const data = await res.json();
    console.log(data);
   // setUsers([...users, data]);
  
}
  return (
    <div className='right-container'>
      <form className="add-form" onSubmit={onLogin}>
        <div className="form-control">
          <label>Email</label>
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
          <label>Password</label>
          <input
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <input type={"submit"} value="Login" className="btn btn-block" />
        <Link to="/Register">Register</Link>
      </form>
    </div>
  )
}

export default Login
