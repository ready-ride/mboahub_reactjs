import React from 'react'
import { Link } from 'react-router-dom'

function DashboardMenu({ name, link, icon }) {
  return (
    <>
      <Link to={`${link}`}>
        <span className='text-blue'>{icon}</span>
        &nbsp;&nbsp;
        <span className='text-dark-blue text-bold'>{name}</span>
      </Link>
    </>
  )
}

export default DashboardMenu
