import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LocationInfo from '../../../ui-components/LocationInfo/LocationInfo';
import Rating from '../../../ui-components/Rating/Rating';

import { Oval} from  'react-loader-spinner'

import { getMyHouses } from '../../../services/HouseServices';
import { userStatus } from '../../../services/UserServices';

import { MdOutlineDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

function AllListings() {
    let token = userStatus();
    token = token && token.token;

    const [houses, setHouses] = useState();
    const [houseloading, setHouseLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async() => {
            setHouseLoading(true);
            let res = await getMyHouses(token);
            setHouseLoading(false);
            if (res && Object.keys(res).includes('errors')) {
                setError(res.error);
                error && console.log(error);
            }else{
                setHouses(res);
            }
          })();
    }, []);

  return (
    <div>
       <strong className='text-dark-blue mb-4'>YOUR LISTINGS</strong>
        <hr />
        <input type="search" placeholder='Search' className='form-control border w-25 my-4' />
        {
          houseloading
          &&
          <Oval color="#00BFFF" height={80} width={80} />
        }
        {
          houses &&
          <div className='d-flex-between-center'>
          {
             houses.map((house, i) =>
               (<div key={i} className="house-preview border shadow rounded">
                   <div className='image-container'>
                       <img src={house.images[0]} alt="house" />
                       <button className='btn btn-primary'><Link to={`${house.id}`}>View</Link></button>
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
        }
        { (houses  && houses.length === 0) && <h5 className='text-blue'>YOU HAVE NO LISTINGS</h5> }
    </div>
  )
}

export default AllListings;
