import React from 'react'

export const NavItemDropdown = ({ title }) => {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        {title}
      </a>
      <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <li>
          <a className='dropdown-item' href='#'>
            Action
          </a>
        </li>
      </ul>
    </li>
  )
}
