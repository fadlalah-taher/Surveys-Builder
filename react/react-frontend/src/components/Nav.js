import React from 'react'
import Logo from '../images/logo.jpg';
//import logo from './logo.png'
const Nav = () => {
  return (
    <div className='nav'>
      <div className='left'>
            <img className='logo' src={Logo} alt="Logo"/>
      </div>
      <div></div>
    </div>
  )
}

export default Nav
