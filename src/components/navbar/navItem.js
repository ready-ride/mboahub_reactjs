import React from 'react'

export const NavItem = ({title}) => {
  return (
    <li class="nav-item">
       <a class="nav-link rounded">{title}</a>
    </li>
  )
}
