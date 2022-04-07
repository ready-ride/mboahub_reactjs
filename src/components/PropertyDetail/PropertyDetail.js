import React from 'react';
import { AiFillEye, AiFillHeart, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';

import ActionButton from '../../ui-components/ActionButton/ActionButton';
import ButtonHeading from '../../ui-components/ButtonHeading/ButtonHeading';
import ContactItem from '../../ui-components/ContactItem/ContactItem';
import LocationInfo from '../../ui-components/LocationInfo/LocationInfo';
import MainHeading from '../../ui-components/MainHeading/MainHeading';
import PropertyType from '../../ui-components/PropertyType/PropertyType';
import Rating from '../../ui-components/Rating/Rating';
import TextButton from '../../ui-components/TextButton/TextButton';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import ContactForm from '../ContactForm/ContactForm';
import ImageGallery from '../ImageGallery/ImageGallery';
import MapComponent from '../MapComponent/MapComponent';

import './PropertyDetail.css';

function PropertyDetail() {
  return (
    <div>
        <div className='property-detail-header pb-4 bg-gray'>
            <div className='property-detail-left'>
                <div>
                    <PropertyType type="Sale" />
                    <PropertyType type="Apartment" />
                </div>
                <div className='mt-4'>
                  <MainHeading heading="House in Financial District" />
                </div>
                <div className='mt-2 d-flex'>
                  <LocationInfo address="70 Bright St. New York, USA" />
                  &nbsp;&nbsp;
                  <Rating review="Good" />
                </div>
                <div className='mt-2 mb-4 d-flex bold'>
                    <h5 className='text-white'>Price:&nbsp;&nbsp;$&nbsp;<span className='price-color'>50.500</span></h5>
                    &nbsp;&nbsp;
                    <span className='text-white font-weight-bold'>Date:&nbsp;&nbsp;20.05.2022 </span>
                </div>
            </div>
            <div className='property-detail-right mb-4'>
                <ActionButton text="Share" />
                <div className='mt-4 d-flex'>
                    <div className=''>
                        <AiFillEye color="#3270FC" />
                        &nbsp;&nbsp;&nbsp;
                        <span>Viewed - 156</span>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                   <div className=''>
                        <AiFillHeart color="#3270FC" />
                        &nbsp;&nbsp;&nbsp;
                        <span>Bookmark - 24</span>
                   </div>
                </div>
            </div>
        </div>
        <BreadCrumb />
        <div className='row property-content bg-gray'>
            <div className='col-md-1'></div>
            <div className='col-md-6'>
                <ImageGallery />
                <div className='amenities row'>
                    <span className='col-md-3'>
                        Type<br />
                        Apartment/House
                    </span>
                    <span className='col-md-3'>
                        Accommodation<br />
                        6 Guests
                    </span>
                    <span className='col-md-3'>
                        Bedrooms<br />
                        3 Bedrooms / 4 Beds
                    </span>
                    <span className='col-md-3'>
                        Bathrooms<br />
                        3 Full
                    </span>
                </div>
                <div className='summary mt-4'>
                    <h5>About This Listing</h5>
                    <p>
                        Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                    </p>
                </div>
            <MapComponent />
            </div>
            <div className='col-md-4'>
                <div className='agent-container rounded'>
                    <div className='agent-top bg-blue rounded-top'>
                        <div className='agent-photo bg-white rounded shadow p-3 d-flex justify-content-around'>
                            <img className='img img-thumbnail' src="https://images.pexels.com/photos/7821936/pexels-photo-7821936.jpeg" width="130px" alt="agent" />
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
    </div>
  )
}

export default PropertyDetail;
