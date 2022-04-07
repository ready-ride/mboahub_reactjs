import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg bg-white fixed-top shadow">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img alt="logo" className='img img-thumbnail' src='/photos/my_place_logo.png' width="100px" height="30px" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">+ &nbsp;Add Listing</Link>
            </li>
            <li className="nav-item dropdown mt-2">
                <Link to="/signin">
                  <FaUserCircle />&nbsp;
                  <span className='mx-2'>Sign In</span>
                </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><span className="dropdown-item">Profile</span></li>
                <li><span className="dropdown-item">Bookings</span></li>
                <li><span className="dropdown-item">My Houses</span></li>
                <li><span className="dropdown-item">Logout</span></li>
              </ul>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  )
}
