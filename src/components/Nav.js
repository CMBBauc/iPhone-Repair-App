import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav-container'>
        <a className="logo" href="http://localhost:8080/api/iPhones" >
            <img alt="apple repair logo" src="https://www.svgrepo.com/show/69341/apple-logo.svg"></img>
        </a>
        <ul>
            <li>iPhones</li>
            <li>Repairs</li>
            <li>search icon</li>
        </ul>
        <div className='hamburger-icon'>hbicons</div>
    </nav>

  )
}

export default Nav