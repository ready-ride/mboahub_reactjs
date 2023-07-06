import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundSlider from 'react-background-slider';
import { AiOutlineSearch } from 'react-icons/ai';
import './Banner.css';
import { PROPERTIES_URL, getPropertiesUrl } from '../../routes/frontend';

function Banner() {
  const [listingName, setListingName] = useState('');
  const [location, setLocation] = useState('');
  const [businessType, setBusinessType] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const URL = getPropertiesUrl(listingName, location, businessType);

    navigate(URL);
  }

  return (
    <section className='banner-section position-relative'>
        <div className='bg-light-dark'></div>
        <div className='banner-content container'>
            <strong>Real Estate Searching Platform</strong>
            <p>Find The House of Your Dream<br />Using Our Platform</p>
            <div className='row mb-4'>
               <div className='col-sm-12 col-md-8'>
                  <div className='form-section row'>
                      <input type="text" value={listingName} onChange={(e) => setListingName(e.target.value)} className='col-md-4' placeholder='What are you looking for?' />
                      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className='col-md-3' placeholder='Where are you looking for?' />
                      {/* <SelectInput  name="businessType" options={businessTypeOptions} data={businessType} handleSelect={(e) => setBusinessType(e.target.value)} /> */}
                      <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} name="businessType" className='col-md-3'>
                          <option value="all">All Types</option>
                          <option value="forRent">For rent</option>
                          <option value="forSale">For sale</option>
                      </select>
                      <button type='button' onClick={handleSearch} className='bg-primary col-md-2 text-small text-bold text-white'>
                        Search&nbsp;&nbsp;
                        <AiOutlineSearch />
                      </button>
                  </div>
               </div>
            </div>
            <strong className='text-white text-bold'>Need more search options ?</strong>
            <span className='advanced-search' onClick={() => navigate(PROPERTIES_URL)}>Advanced Search</span>
        </div>
        <BackgroundSlider
          images={['/photos/banner-photo-1.webp', '/photos/banner-photo-2.webp']}
          duration={7} transition={2} />
    </section>
  )
}

export default Banner;
