import React from 'react';
import { Link } from 'react-router-dom';

function Logo({text}) {
  return (
    <Link to="/" className="navbar-brand d-flex-start-end">
        <img alt="logo" className='img img-thumbnail' src='/photos/my_place_logo.png' width="50px" height="20px" />&nbsp;
        <span className='text-blue text-bold'>{text}</span>
    </Link>
  )
}

export default Logo;
