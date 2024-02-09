import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MdOutlineAddCircle } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa'

import Logo from '../../../components/common/Logo/Logo';
import SmallTextButton from '../../../components/common/Buttons/SmallTextButton/SmallTextButton';

import { userLogout } from '../../../services/UserServices';

import './navbar.css';
import SearchBar from '../../../pages/Properties/SearchBar';

export default function Navbar() {

  let auth = JSON.parse(localStorage.getItem('login'));

  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/");
  };

  return (
  <div className='d-flex flex-column fixed-top'>
    <nav className="navbar navbar-expand-lg bg-white shadow">
      <div className="container">
        <Logo />
        <div className="collapse navbar-collapse">
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
                    <span role="button" onClick={ handleLogout } className='bg-primary p-2 rounded text-white mx-2'>
                        <FaUserCircle />&nbsp;
                        logout
                    </span>
                    :
                    <Link to="/signin" className='mx-2'>
                        <FaUserCircle />&nbsp;
                        login
                    </Link>
                  }
              </li>
            </ul>
        </div>
      </div>
    </nav>
    {window.location.pathname == '/properties' && <SearchBar />}
  </div>
  )
}
