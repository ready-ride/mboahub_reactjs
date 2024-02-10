import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { userStatus } from '../../../services/UserServices'

import './MyListings.scss'

function MyListings() {
  let token = userStatus()
  token = token && token.token

  if (!token) {
    return <Navigate to='/signin' />
  }

  return (
    <div className='my-listings'>
      <Outlet />
    </div>
  )
}

export default MyListings
