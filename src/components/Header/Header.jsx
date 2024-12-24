import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName='active' exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName='active'>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact/contact" activeClassName='active'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header