import React from 'react'
import Logo from '../images/logo.jpg';
import axios from 'axios';

//import logo from './logo.png'
const Nav = () => {
  const logout = async (e) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/logout',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Accept':'application/json'
      },
    })
    .then(function(response){
      localStorage.setItem('access_token',null);
      window.location = "/";
    }).catch(function(response){
      alert("You are not logged in!")
    })
  }
  
  return (
    <div className='nav'>
      <div className='left'>
            <img className='logo' src={Logo} alt="Logo"/>
      </div>
      <input type={"submit"} onClick={logout} value="Logout" className="btn btn-logout" />
    </div>
  )
}

export default Nav
