import React from 'react';
import './PropertyType.css';

function PropertyType({ type }) {
  return (
    <span className='property-type'>
      { type }
    </span>
  )
}

export default PropertyType;