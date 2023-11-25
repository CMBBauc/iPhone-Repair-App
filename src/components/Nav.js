import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='nav-container'>
        <a className="logo" href="http://localhost:8080/api/iPhones" >
            <img alt="apple repair logo" src="https://www.svgrepo.com/show/69341/apple-logo.svg"></img>
        </a>
        <ul>
            <Link to="http://localhost:3000/Home"><li>iPhones</li></Link>
            <li>Repairs</li>
            <li>search icon</li>
        </ul>
        <div className='hamburger-icon'> = </div>
    </nav>

  )
}

export default Nav