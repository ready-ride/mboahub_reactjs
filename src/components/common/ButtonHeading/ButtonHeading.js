/* eslint-disable react/prop-types */
import React from 'react';
import './ButtonHeading.css';

function ButtonHeading({ text }) {
  return <h3 className="btn-heading rounded-top">{text}</h3>;
}

export default ButtonHeading;
