import { useState} from 'react';
import { Link } from "react-router-dom";

//import Register from './Register';
import axios from 'axios';

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

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/v1/login',
        data: item,
    })
    .then(function (response) {
        var token = response.data["access_token"];
      localStorage.setItem("access_token", token);
      console.log("hi");
      console.log(token);
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
      if(type == 1){
        //localStorage.setItem('token', user_id)
        console.log("True Admin");
        window.location = "/AddSurvey";
      }
      else{
        console.log("True User");
        window.location = "/DisplaySurvey";
        //invalidEmail.style.display="block";
      }
    })
    }).catch(function(response){
      //console.log("erroe fadel");
      //invalidPE.style.display = "block";
    })
   // setUsers([...users, data]);
}

  return (
    <div className='right-container'>
      <form className="add-form" onSubmit={onLogin}>
      <h1>Login</h1>
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
