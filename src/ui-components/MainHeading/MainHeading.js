import React from 'react';
import './MainHeading.css';

function MainHeading({ heading }) {
  return (
    <h3 className="main-heading">{ heading }</h3>
  )
}

export default MainHeading;