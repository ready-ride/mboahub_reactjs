/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { HOME_URL } from './frontend';

export const AnonymousRoute = () => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn
    ? <Navigate to={HOME_URL} replace />
    : <Outlet />;
};
