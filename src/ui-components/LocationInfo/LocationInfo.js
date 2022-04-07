import React from 'react';
import { MdLocationOn } from 'react-icons/md';

function LocationInfo({address}) {
  return (
    <span><MdLocationOn size={25} color="#3270FC" />&nbsp;<span className='text-white '>{address}</span></span>
  )
}

export default LocationInfo;