import React from 'react';
import { MdLocationOn } from 'react-icons/md';

function LocationInfo({address, text_color}) {
  return (
    <span><MdLocationOn size={25} color="#3270FC" />&nbsp;<span className={text_color}>{address}</span></span>
  )
}

export default LocationInfo;