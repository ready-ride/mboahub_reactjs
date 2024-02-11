import React, { useState } from 'react';
import { FaUserCircle, FaHome } from 'react-icons/fa';
import { MdAddCircle } from "react-icons/md";
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { userLogout } from '../../../services/UserServices';

const BottomNav = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  let auth = JSON.parse(localStorage.getItem('login'));

  const handleLogout = () => {
    userLogout();
    setShow(false);
    navigate("/");
  };

  return (
    <nav className='bottom-nav' onMouseLeave={() => setShow(false)}>
      <ul>
        <li>
          <Link to="/">
            <FaHome size={30} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <MdAddCircle size={30} />
            <span>New</span>
          </Link>
        </li>
        <li className='signin-wrapper' onMouseOver={() => setShow(true)}>
           { show && 
             <div className='sub-menu-nav' onMouseLeave={() => setShow(false)}>
                <span onClick={() => setShow(false)}><Link to="/dashboard">Dashboard</Link></span>
                { auth? <span onClick={ handleLogout } >Logout</span> : <span><Link to="/signin">Login</Link></span>}
             </div>
           }
            <Link to=''>
              <FaUserCircle size={30} />
              <span>User</span>
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BottomNav
