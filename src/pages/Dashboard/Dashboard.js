import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';

import { BsGraphUp } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import DashboardMenu from './DashboardMenu';
import Navbar from '../../components/navbar/Navbar';

function Dashboard() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState('');

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('login'));
    setAuth(token);
  }, [])

  if(!auth){
      navigate("/");
  }
  return (
   <>
      <Navbar />
      <div className="row dashboard">
        <div className='dashboard-menu'>
            <div className='left-menu shadow'>
                <div>MAIN</div>
                <DashboardMenu name="Dashboard" icon={<BsGraphUp />} />
                <DashboardMenu name="Edit Profile" icon={<FaUserEdit />} />
                <DashboardMenu name="Messages" icon={<FaUserEdit />} />
                <DashboardMenu name="Agent List" icon={<FaUserEdit />} />
                <div></div>
                <div>LISTINGS</div>
                <div>
                   <Link to="my_listings"><span className='text-blue'><FaUserEdit /></span>&nbsp;&nbsp;My Listings</Link>
                </div>
                <div>
                   <Link to="new_listing"><span className='text-blue'><FaUserEdit /></span>&nbsp;&nbsp;New Listing</Link>
                </div>
                <DashboardMenu name="Bookings" icon={<FaUserEdit />} />
                <DashboardMenu name="Reviews" icon={<FaUserEdit />} />
                <div></div>
                <div></div>
                <div className='text-small text-dark-blue'>&copy;MYPLACE 2022.</div>
            </div>
        </div>
        <div className='dashboard-content'>
            <div className='row mt-1'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                  <Outlet />
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;