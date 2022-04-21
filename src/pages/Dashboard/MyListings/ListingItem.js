import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaBed, FaBath } from 'react-icons/fa';
import { MdOutlineHouse, MdPeopleOutline, MdFence } from 'react-icons/md';
import { TiArrowBackOutline } from 'react-icons/ti';
import { GiRiceCooker } from 'react-icons/gi';

import Navbar from '../../../components/navbar/navbar';
import ImageGallery from '../../../components/ImageGallery/ImageGallery';
import MapComponent from '../../../components/MapComponent/MapComponent';

import { getHouse } from '../../../services/HouseServices';

function Listingitem() {
    const { house_id } = useParams();

    const [house, setHouse] = useState();
    const [houseloading, setHouseLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async() => {
            setHouseLoading(true);
            let res = await getHouse(house_id);
            setHouseLoading(false);
            if (Object.keys(res).includes('errors')) {
                setError(res.error);
                error && console.log(error);
            }else{
                setHouse(res.house);
            }
          })();
    }, []);

  return (
    <div>
        <Navbar />
        <div className='row property-content bg-gray'>
            <div className='col-md-12'>
            <Link to="/dashboard/my_listings">
                <span className='p-2 bg-blue text-white text-small mb-4 rounded'>
                   <TiArrowBackOutline size={30} />&nbsp;BACK
                </span>
            </Link>
                { houseloading && <ImageGallery images={ house && house.images } />}
                <div className='amenities row text-small'>
                    <span className='col-md-3'>
                        <MdOutlineHouse size={50} color="#3270FC" /><br />
                        <span className="text-dark-blue text-bold">Type</span><br />
                        Apartment/House
                    </span>
                    <span className='col-md-3'>
                        <MdPeopleOutline size={50} color="#3270FC" /><br />
                        <span className="text-dark-blue text-bold">Accommodation</span><br />
                        { house && house.properties.sitting_room }&nbsp;Sitting rooms
                    </span>
                    <span className='col-md-3'>
                         <FaBed size={50} color="#3270FC" /><br />
                         <span className="text-dark-blue text-bold">Bedrooms</span><br />
                        { house && house.properties.num_bed_rooms }
                    </span>
                    <span className='col-md-3'>
                        <FaBath size={50} color="#3270FC" /><br />
                        <span className="text-dark-blue text-bold">Bathrooms/Toilets</span><br />
                        { house && house.properties.num_toilets }
                    </span>
                </div>
                <div className='amenities row text-small'>
                    <div className='col-md-3'>
                        <GiRiceCooker size={50} color="#3270FC" /><br />
                        <span className="text-dark-blue text-bold">Kitchen</span><br />
                        { house && house.properties.kitchen ? 'Available' :'None' }
                    </div>
                    <div className='col-md-3'>
                        <MdFence size={50} color="#3270FC" /><br />
                        <span className="text-dark-blue text-bold">Fence</span><br />
                        { house && house.properties.fenced ? 'Fenced' : 'Not fenced' }
                    </div>
                </div>
                <div className='summary mt-4'>
                    <h5>About This Listing</h5>
                    {
                        house?
                        <p>
                            {house.summary}
                        </p>
                        :
                        <p>.....</p>
                    }
                </div>
            <MapComponent />
            </div>
        </div>
    </div>
  )
}

export default Listingitem;
