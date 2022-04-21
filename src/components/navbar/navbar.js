import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MdOutlineAddCircle } from 'react-icons/md';
import { FaUserCircle, FaBars } from 'react-icons/fa'

import Logo from '../../ui-components/Logo/Logo';
import SmallTextButton from '../../ui-components/Buttons/SmallTextButton/SmallTextButton';

import { userLogout } from '../../services/UserServices';

import './navbar.css';

export default function Navbar() {

  let auth = JSON.parse(localStorage.getItem('login'));

  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/");
  };

  return (
  <nav className="navbar navbar-expand-lg bg-white fixed-top shadow">
    <div className="container">
      <Logo />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-blue">
            <FaBars />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                 <SmallTextButton text="Add Listing" icon={<MdOutlineAddCircle />} />
              </Link>
            </li>
            <li className="nav-item dropdown mt-2">
                {
                  auth ?
                  <span role="button" onClick={ handleLogout } className='bg-blue p-2 rounded text-white mx-2'>
                      <FaUserCircle />&nbsp;
                      logout
                  </span>
                  :
                  <Link to="/signin" className='mx-2'>
                      <FaUserCircle />&nbsp;
                      login
                  </Link>
                }
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
