import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

import Logo from '../../common/Logo/Logo';
import './navbar.css'
import SearchBar from '../../../pages/Properties/SearchBar'
import { ADMIN_DASHBOARD_URL, HOME_URL } from '../../../routes/frontend';
import { UserContext } from '../../../contexts/UserContext';

export default function Navbar() {
  const { isAdmin } = useContext(UserContext);

  return (
  <div className='d-flex flex-column fixed-top'>
    <nav className="navbar navbar-expand-lg bg-white shadow">
      <div className="container">
        <Logo />
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={HOME_URL} className="nav-link active" aria-current="page">Home</Link>
              </li>
              {
                isAdmin &&
                <li className="nav-item dropdown mt-2">
                <Link to={ADMIN_DASHBOARD_URL} className='mx-2'>
                    <FaUserCircle />&nbsp;
                    Dashboard
                </Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
      {window.location.pathname === '/properties' && <SearchBar />}
    </div>
  )
}
