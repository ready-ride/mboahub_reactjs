import React from 'react';

import { MdLocationOn } from 'react-icons/md';
import { BiGitCompare, BiCamera, BiCube } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { FaBed, FaBath } from 'react-icons/fa';


import './PropertyItem.css';
import PropertyType from '../../ui-components/PropertyType/PropertyType';
import Rating from '../../ui-components/Rating/Rating';
import { Link } from 'react-router-dom';
import IconBox from '../../ui-components/IconBox/IconBox';

const PropertyItem = () => {
  return (
        <div className='property-item rounded shadow my-4 mx-2'>
            <Link to="/property_detail">
                <div className='property-item-up'>
                    <div className='property-item-up-left'>
                        <div className='up-left-top'>
                            <PropertyType type="Sale" />
                            <PropertyType type="Apartment" />
                        </div>
                        <div className='up-left-bottom'>
                            <span><MdLocationOn />&nbsp;70 Bright St. New York, USA</span>
                        </div>
                    </div>
                    <div className='property-item-up-right'>
                        <div className='up-right-top'>
                            <IconBox icon={<BsHeart size={20} />} bg_color="#FFFFFF" text_color="#2270FC" icon_size="p-2 m-2" />
                            <IconBox icon={<BiGitCompare size={20} />} bg_color="#FFFFFF" text_color="#2270FC" icon_size="p-2 m-2" />
                        </div>
                        <div className='up-right-bottom'>
                            <BiCamera size={20} />
                        </div>
                    </div>
                </div>
            </Link>
        <div className='property-item-down bg-white'>
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
                <Rating />
            </div>

        </div>
    </div>
  )
}

export default PropertyItem;
