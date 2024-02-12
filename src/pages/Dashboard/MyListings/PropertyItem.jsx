/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import LocationInfo from '../../../components/common/LocationInfo/LocationInfo';
import Rating from '../../../components/common/Rating/Rating';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';

const PropertyItem = ({ house, key }) => {
  return (
    <div key={key} className='house-preview border shadow rounded'>
      <div className='image-container'>
        <img src={house.images[0]} alt='house' />
        <button className='btn btn-primary'>
          <Link to={`${house.id}`}>View</Link>
        </button>
      </div>
      <div className='house-preview-content'>
        <div className='p-2'>
          <strong className='text-small text-gray'>{house.listing_name}</strong>
          <br />
          <LocationInfo address={house.location} text_color='lightgray' />
          <Rating />
        </div>
        <div className='listing-actions'>
          <span className='text-small views'>Viewed - 645</span>
          <div className='listing-actions-items'>
            <span>
              <FiEdit color='#3270FC' />
            </span>
            <span>
              <FiEdit color='#3270FC' />
            </span>
            <span>
              <MdOutlineDeleteForever color='#3270FC' />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyItem