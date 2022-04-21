import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaBed, FaBath } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import { MdOutlineHouse, MdPeopleOutline, MdFence } from 'react-icons/md';
import { TiArrowBackOutline } from 'react-icons/ti';
import { GiRiceCooker } from 'react-icons/gi';

import ButtonHeading from '../../ui-components/ButtonHeading/ButtonHeading';
import ContactItem from '../../ui-components/ContactItem/ContactItem';
import Rating from '../../ui-components/Rating/Rating';
import TextButton from '../../ui-components/TextButton/TextButton';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import ImageGallery from '../ImageGallery/ImageGallery';
import MapComponent from '../MapComponent/MapComponent';
import Navbar from '../navbar/Navbar';

import { getHouse } from '../../services/HouseServices';

import './PropertyDetail.css';
import PropertyHeader from './PropertyHeader';

function PropertyDetail() {
    const { house_id } = useParams();

    const [house, setHouse] = useState();
    const [houseloading, setHouseLoading] = useState(false);
    const [error, setError] = useState();

    let token = JSON.parse(localStorage.getItem('login'));
    token = token && token.token;

    useEffect(() => {
        (async() => {
            setHouseLoading(true);
            let res = await getHouse(house_id, token);
            setHouseLoading(false);
            if (Object.keys(res).includes('errors')) {
                setError(res.error);
            }else{
                setHouse(res.house);
            }
          })();
    }, []);
  const avatar = '/photos/avatar.png'
  return (

    <div>
        <Navbar />
        <PropertyHeader   house={ house && house }/>
        <BreadCrumb />
        <div className='row property-content bg-gray'>
            <div className='col-md-1'></div>
            <div className='col-md-6'>
            <Link to="/dashboard/my_listings">
                <span className='p-2 bg-blue text-white text-small mb-4 rounded'>
                   <TiArrowBackOutline size={30} />&nbsp;BACK
                </span>
            </Link>
                <ImageGallery images={ house && house.images } />
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
            <div className='col-md-4'>
                <div className='agent-container rounded'>
                    <div className='agent-top rounded-top'>
                        <div className='agent-photo bg-white rounded shadow p-3 d-flex justify-content-around'>
                            <img className='img img-thumbnail' src={`${avatar}`} width="120px" alt="agent" />
                            <div className='text-blue bold text-small'>
                                <h5>Jessie Wilcox</h5>
                                <strong >22&nbsp;&nbsp;<span className='text-gray'>Property Listings</span></strong>
                                <Rating />
                            </div>
                        </div>
                    </div>
                    <div className='agent-bottom bg-white shadow rounded-bottom py-4 text-small'>
                        <ContactItem icon={<AiOutlinePhone size="20" />} title="Phone" text="+7(123)987654" />
                        <ContactItem icon={<AiOutlineMail size="20" />} title="Mail" text="JessieWilcox@domain.com" />
                        <div className='pt-3 px-3 border-top'>
                            <TextButton text="View Profile" />
                        </div>
                    </div>
                    <div className='mt-4 shadow rounded bg-white'>
                        <ButtonHeading text="Contact Property" />
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className='col-md-1'></div>
        </div>
        <Footer />
    </div>
  )
}

export default PropertyDetail;
