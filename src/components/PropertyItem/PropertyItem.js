import React from 'react';

import { MdLocationOn } from 'react-icons/md';
import { BiGitCompare, BiCamera, BiCube } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { FaBed, FaBath, FaStar } from 'react-icons/fa';


import './PropertyItem.css';

const PropertyItem = () => {
  return (
    <div className='property-item rounded shadow my-4'>
        <div className='property-item-up'>
            <div className='property-item-up-left'>
                <div className='up-left-top'>
                    <span>Sale</span>
                    <span>Apartment</span>
                </div>
                <div className='up-left-bottom'>
                    <span><MdLocationOn />&nbsp;70 Bright St. New York, USA</span>
                </div>
            </div>
            <div className='property-item-up-right'>
                <div className='up-right-top'>
                    <BsHeart size={30} />
                    <BiGitCompare size={30} />
                </div>
                <div className='up-right-bottom'>
                    <BiCamera size={20} />
                </div>
            </div>
        </div>
        <div className='property-item-down'>
            <h4>Gorgeous House For Sale</h4>
            <h5>$&nbsp;600,000</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla...</p>
            <div className='property-features'>
                <span><FaBed size={20} />&nbsp;<span className='property-count'>3</span></span>
                <span><FaBath size={20} />&nbsp;<span className='property-count'>2</span></span>
                <span><BiCube size={20} />&nbsp;<span className='property-count'>450&nbsp;ft2</span></span>
            </div>
            <div className='property-more'>
                <div className='property-poster'>
                    <h5>By Liza Rose</h5>
                </div>
                <div className='property-rating'>
                    <span><FaStar size={13} /></span>
                    <span><FaStar size={13} /></span>
                    <span><FaStar size={13} /></span>
                    <span><FaStar size={13} /></span>
                    <span><FaStar size={13} /></span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PropertyItem;
