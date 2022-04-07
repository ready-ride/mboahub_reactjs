import React from 'react';
import './Rating.css';
import { FaStar } from 'react-icons/fa';

function Rating({review}) {
  return (
    <div className='property-rating'>
       <div>
            <span><FaStar color="#FACC39" size={13} /></span>
            <span><FaStar color="#FACC39" size={13} /></span>
            <span><FaStar color="#FACC39" size={13} /></span>
            <span><FaStar color="#FACC39" size={13} /></span>
            <span><FaStar color="#FACC39" size={13} /></span>
       </div>
       &nbsp;&nbsp;
       <h4 className='text-light'>{review}</h4>
    </div>
  )
}

export default Rating;