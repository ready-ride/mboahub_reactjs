import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Logo from '../../common/Logo/Logo';
import './navbar.css';
import { HOME_URL } from '../../../routes/frontend';
import WhatsApp from '../../libs/WhatsApp/WhatsApp';

export default function Navbar() {
  return (
    <div className="d-flex flex-column fixed-top">
      <nav className="navbar navbar-expand-lg bg-white shadow">
        <div className="container">
          <Logo />
          &nbsp;&nbsp;
          <span className="ml-4">
            <AiOutlinePhone size={20} />
            {' '}
            +(237) 672123230
          </span>
          &nbsp;&nbsp;
          <span className="ml-4">
            <AiOutlineMail size={20} />
            {' '}
            info@mboahub.com
          </span>
          <WhatsApp phone="672378393" text="Chat With Us" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={HOME_URL} className="nav-link active" aria-current="page">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
