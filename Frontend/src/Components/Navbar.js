import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/R.jpeg';

const Navbar = () => {
  return (
    <div>
      <script></script>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <i className='fab fa-react'></i>
          <NavLink className="navbar-brand" to="/home"><img className='logo' src={logo} alt="logo" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">Registration</NavLink>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
