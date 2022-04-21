import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Oval} from  'react-loader-spinner'

import './MyListings.scss'
import { getMyHouses } from '../../../services/HouseServices';
import LocationInfo from '../../../ui-components/LocationInfo/LocationInfo';
import Rating from '../../../ui-components/Rating/Rating';

import { MdOutlineDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function MyListings() {

    const [houses, setHouses] = useState();
    const [houseloading, setHouseLoading] = useState(false);
    const [error, setError] = useState();

    let token = JSON.parse(localStorage.getItem('login'));
    token = token && token.token;

    useEffect(() => {
        (async() => {
            setHouseLoading(true);
            let res = await getMyHouses(token);
            setHouseLoading(false);
            if (Object.keys(res).includes('errors')) {
                setError(res.error);
            }else{
                setHouses(res);
            }
          })();
    }, []);

  return (
    <div className='my-listings'>
        <strong className='text-dark-blue mb-4'>YOUR LISTINGS</strong>
        <hr />
        <input type="search" placeholder='Search' className='form-control border w-25 my-4' />
        {
          houseloading
          &&
          <Oval color="#00BFFF" height={80} width={80} />
        }
        {
          houses ?
          <div className='d-flex-between-center'>
          {
            houses.map((house, i) =>
               (<div key={i} className="house-preview border shadow rounded">
                   <div className='image-container'>
                       <img src={house.images[0]} alt="house" />
                       <button className='btn btn-primary'><Link to={`/my_listings/${house.id}`}>View</Link></button>
                   </div>
                   <div className='house-preview-content'>
                       <div className='p-2'>
                           <strong className='text-small text-gray'>{house.listing_name}</strong><br />
                           <LocationInfo address={house.location} text_color="lightgray" />
                           <Rating />
                       </div>
                       <div className='listing-actions'>
                           <span className='text-small views'>Viewed - 645</span>
                           <div className='listing-actions-items'>
                               <span><FiEdit color='#3270FC'/></span>
                               <span><FiEdit color='#3270FC'/></span>
                               <span><MdOutlineDeleteForever color='#3270FC' /></span>
                           </div>
                       </div>
                   </div>
               </div>))
           }
           </div>
           :
           <h5 className='text-blue'>YOU HAVE NO LISTINGS</h5>
        }
    </div>
  )
}

export default MyListings;
