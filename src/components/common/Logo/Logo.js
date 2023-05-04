import React from 'react';
import { Link } from 'react-router-dom';

function Logo({text}) {
  return (
    <Link to="/" className="navbar-brand d-flex-start-end">
        <img alt="logo" className='img img-thumbnail' src='/photos/mboa_logo.webp' width="250px" height="80px" />&nbsp;
        <span className='text-blue text-bold'>{text}</span>
    </Link>
  )
}

export default Logo;
