/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useLocalStorage from '../hooks/store/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { getAuthToken } = useLocalStorage();
  const isLoggedIn = getAuthToken();
  const isAdmin = true;

  return (
    <UserContext.Provider value={{ isLoggedIn, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
