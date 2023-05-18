import { useState } from 'react';

export const useUserDetails = () => {
  const token = JSON.parse(localStorage.getItem('login'));
  if (!token) {
    localStorage.removeItem('login');
  }
}