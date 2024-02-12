import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { SIGNIN_PATH } from './frontend';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? <Outlet /> : <Navigate to={SIGNIN_PATH} />
};

export default ProtectedRoutes;
