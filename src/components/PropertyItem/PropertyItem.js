/* eslint-disable react/prop-types */
import React from 'react';

import { MdLocationOn } from 'react-icons/md';
import { BiGitCompare, BiCamera, BiCube } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { FaBed, FaBath } from 'react-icons/fa';

import './PropertyItem.css';
import { Link } from 'react-router-dom';
import PropertyType from '../common/PropertyType/PropertyType';
import Rating from '../common/Rating/Rating';
import IconBox from '../common/IconBox/IconBox';
import { costInThousands } from '../../services/utilities';

const PropertyItem = ({ house }) => {
  const backgroundImage = house.images[0];

  return (
    <div className="property-item bg-white rounded shadow my-4">
      <Link to={`/houses/${house.id}`}>
        <div className="property-item-up" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="property-item-up-left">
            <div className="up-left-top">
              <PropertyType type="Sale" />
              <PropertyType type="Apartment" />
            </div>
            <div className="up-left-bottom">
              <span>
                <MdLocationOn />
&nbsp;
                {house && house.location }
              </span>
            </div>
          </div>
          <div className="property-item-up-right">
            <div className="up-right-top">
              <IconBox icon={<BsHeart size={20} />} bg_color="#FFFFFF" text_color="#2270FC" icon_size="p-2 m-2" />
              <IconBox icon={<BiGitCompare size={20} />} bg_color="#FFFFFF" text_color="#2270FC" icon_size="p-2 m-2" />
            </div>
            <div className="up-right-bottom">
              <BiCamera size={20} />
&nbsp;
              <span className="bg-primary p-1 text-small rounded">{house.images.length || ''}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="property-item-down bg-white">
        <div className="property__item__down-top">
          <h4>{house.listing_name || ''}</h4>
          <h5>
            FCFA&nbsp;
            {costInThousands(house.cost || '')}
          </h5>
          <p>{`${ house && house.summary && house.summary.slice(0, 60)}...`}</p>
          <div className="property-features">
            <span>
              <FaBed size={20} />
&nbsp;
              <span className="property-count">{house && house.properties && house.properties.num_bed_rooms}</span>
            </span>
            <span>
              <FaBath size={20} />
&nbsp;
              <span className="property-count">{house && house.properties && house.properties.num_toilets}</span>
            </span>
            <span>
              <BiCube size={20} />
&nbsp;
              <span className="property-count">450&nbsp;ft2</span>
            </span>
          </div>
        </div>
        <div className="property-more">
          <div className="property-poster">
            <h5>
              By&nbsp;
              {house && house.published_by}
            </h5>
          </div>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
