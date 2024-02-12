/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './SmallTextButton.scss';

function SmallTextButton({
  text, classes, icon, handleClick,
}) {
  return (
    <button onClick={handleClick} className={`small-text-button ${classes}`}>
      {icon}
      {text}
    </button>
  );
}

export default SmallTextButton;
