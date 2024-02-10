import React from 'react'

export const NavItem = ({ title }) => {
  return (
    <li className='nav-item'>
      <a className='nav-link rounded'>{title}</a>
    </li>
  )
}
