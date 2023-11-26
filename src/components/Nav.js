import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
 
  return (
    <nav className='nav-container'>
        <a className="logo" href="http://localhost:3000" >
            <img
              alt="apple repair logo"
              src="https://www.svgrepo.com/show/69341/apple-logo.svg"
              >
            </img>
        </a>
        <ul>
            <Link to="/iPhones"><li>iPhones</li></Link>
            <Link to="http://localhost:3000/repairs"><li>Repairs</li></Link>
            <Link to="http://localhost:3000/blog"><li>Blog</li></Link>
            <li>search icon</li>
        </ul>
        <div className='hamburger-icon'> = </div>
    </nav>

  )
}

export default Nav