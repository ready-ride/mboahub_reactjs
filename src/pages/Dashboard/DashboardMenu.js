import React from 'react';
import { Link } from 'react-router-dom';

function DashboardMenu({name, setMenu, icon}) {
  return (
    <div onClick={setMenu} className='text-small text-bold text-dark-blue'>
        <span className='text-blue'>{icon}</span>&nbsp;&nbsp;
        {name}
    </div>
  )
}

export default DashboardMenu;
