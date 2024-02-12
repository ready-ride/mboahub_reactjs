/* eslint-disable react/prop-types */
import React from 'react';
import './ActionButton.css';

import { FcShare } from 'react-icons/fc';

function ActionButton({ text }) {
  return (
    <button type="submit">
      <FcShare />
      &nbsp;&nbsp;
      <span>{text}</span>
    </button>
  );
}

export default ActionButton;
