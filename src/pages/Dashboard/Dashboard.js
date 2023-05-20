import React from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css';

import { BsListCheck } from 'react-icons/bs';
import { FaUserEdit, FaRegCalendarCheck, FaRegComments } from 'react-icons/fa';
import { MdEmail, MdPeopleAlt } from 'react-icons/md';
import { AiOutlineAreaChart, AiOutlineFileAdd } from 'react-icons/ai';
import DashboardMenu from './DashboardMenu';
import Navbar from '../../components/layouts/navbar/navbar';
import { Navigate } from 'react-router-dom';

function Dashboard() {

  return (
   <>
      <div className="row dashboard">
        <div className='dashboard-menu'>
            <div className='left-menu shadow'>
                <div>MAIN</div>
                <DashboardMenu name="Dashboard" link="" icon={<AiOutlineAreaChart />} />
                <DashboardMenu name="Edit Profile" link="edit_profile" icon={<FaUserEdit />} />
                <DashboardMenu name="Messages" link="" icon={<MdEmail />} />
                <DashboardMenu name="Agent List" link="" icon={<MdPeopleAlt />} />
                <div></div>
                <div>LISTINGS</div>
                <DashboardMenu name='My Listings' link="my_listings" icon={<BsListCheck />} />
                <DashboardMenu name='New Listing' link="" icon={<AiOutlineFileAdd />} />
                <DashboardMenu name="Bookings" link="" icon={<FaRegCalendarCheck />} />
                <DashboardMenu name="Reviews" link="" icon={<FaRegComments />} />
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
