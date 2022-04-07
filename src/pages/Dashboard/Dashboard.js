import React from 'react';
import './Dashboard.css';
import NewListing from './NewListing/NewListing';

function Dashboard() {
  return (
    <div className="row dashboard">
        <div className='dashboard-menu'>
            <div className='left-menu h-100 shadow'>
                <div>MAIN</div>
                <div>Dashboard</div>
                <div>Edit Profile</div>
                <div>Messages</div>
                <div>Agents List</div>
                <div></div>
                <div>LISTINGS</div>
                <div>My Listings</div>
                <div>Bookings</div>
                <div>Reviews</div>
                <div></div>
                <div></div>
                <div>&copy;MYPLACE 2022</div>
            </div>
        </div>
        <div className='dashboard-content'>
            <div className='row mt-1'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                  <NewListing />
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;